import { series, parallel } from 'gulp'
import { TaskFunction } from "undertaker";
import { deleteSync } from 'del'
import { buildModules } from './tasks/modules'
import { buildOutput } from './utils/paths'
import { copyTypesDefinitions, generateTypesDefinitions } from './tasks/types-definitions'
import { buildTheme } from './tasks/theme/gulpfile.prod'

export const clean: TaskFunction = (done) => {
  deleteSync(
    buildOutput,
    { force: true }
  )
  done()
}

export default series(clean, buildTheme, parallel(buildModules, generateTypesDefinitions), copyTypesDefinitions) 
