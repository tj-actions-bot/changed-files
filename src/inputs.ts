import * as core from '@actions/core'

export type Inputs = {
  files: string
  filesSeparator: string
  filesFromSourceFile: string
  filesFromSourceFileSeparator: string
  filesIgnore: string
  filesIgnoreSeparator: string
  filesIgnoreFromSourceFile: string
  filesIgnoreFromSourceFileSeparator: string
  separator: string
  includeAllOldNewRenamedFiles: boolean
  oldNewSeparator: string
  oldNewFilesSeparator: string
  sha: string
  baseSha: string
  since: string
  until: string
  path: string
  quotePath: boolean
  diffRelative: boolean
  dirNames: boolean
  dirNamesMaxDepth?: number
  dirNamesExcludeRoot: boolean
  dirNamesExcludeCurrentDir: boolean
  json: boolean
  escapeJson: boolean
  fetchDepth?: number
  sinceLastRemoteCommit: boolean
  writeOutputFiles: boolean
  outputDir: string
}

export const getInputs = (): Inputs => {
  const files = core.getInput('files', {required: false})
  const filesSeparator = core.getInput('files_separator', {
    required: false,
    trimWhitespace: false
  })
  const filesIgnore = core.getInput('files_ignore', {required: false})
  const filesIgnoreSeparator = core.getInput('files_ignore_separator', {
    required: false,
    trimWhitespace: false
  })
  const filesFromSourceFile = core.getInput('files_from_source_file', {
    required: false
  })
  const filesFromSourceFileSeparator = core.getInput(
    'files_from_source_file_separator',
    {
      required: false,
      trimWhitespace: false
    }
  )
  const filesIgnoreFromSourceFile = core.getInput(
    'files_ignore_from_source_file',
    {required: false}
  )
  const filesIgnoreFromSourceFileSeparator = core.getInput(
    'files_ignore_from_source_file_separator',
    {
      required: false,
      trimWhitespace: false
    }
  )
  const separator = core.getInput('separator', {
    required: true,
    trimWhitespace: false
  })
  const includeAllOldNewRenamedFiles = core.getBooleanInput(
    'include_all_old_new_renamed_files',
    {required: false}
  )
  const oldNewSeparator = core.getInput('old_new_separator', {
    required: true,
    trimWhitespace: false
  })
  const oldNewFilesSeparator = core.getInput('old_new_files_separator', {
    required: true,
    trimWhitespace: false
  })
  const sha = core.getInput('sha', {required: false})
  const baseSha = core.getInput('base_sha', {required: false})
  const since = core.getInput('since', {required: false})
  const until = core.getInput('until', {required: false})
  const path = core.getInput('path', {required: false})
  const quotePath = core.getBooleanInput('quotepath', {required: false})
  const diffRelative = core.getBooleanInput('diff_relative', {required: false})
  const dirNames = core.getBooleanInput('dir_names', {required: false})
  const dirNamesMaxDepth = core.getInput('dir_names_max_depth', {
    required: false
  })
  const dirNamesExcludeRoot = core.getBooleanInput('dir_names_exclude_root', {
    required: false
  })
  const dirNamesExcludeCurrentDir = core.getBooleanInput(
    'dir_names_exclude_current_dir',
    {
      required: false
    }
  )
  const json = core.getBooleanInput('json', {required: false})
  const escapeJson = core.getBooleanInput('escape_json', {required: false})
  const fetchDepth = core.getInput('fetch_depth', {required: false})
  const sinceLastRemoteCommit = core.getBooleanInput(
    'since_last_remote_commit',
    {required: false}
  )
  const writeOutputFiles = core.getBooleanInput('write_output_files', {
    required: false
  })
  const outputDir = core.getInput('output_dir', {required: false})

  const inputs: Inputs = {
    files,
    filesSeparator,
    filesFromSourceFile,
    filesFromSourceFileSeparator,
    filesIgnore,
    filesIgnoreSeparator,
    filesIgnoreFromSourceFile,
    filesIgnoreFromSourceFileSeparator,
    separator,
    includeAllOldNewRenamedFiles,
    oldNewSeparator,
    oldNewFilesSeparator,
    sha,
    baseSha,
    since,
    until,
    path,
    quotePath,
    diffRelative,
    dirNames,
    dirNamesExcludeRoot,
    dirNamesExcludeCurrentDir,
    json,
    escapeJson,
    sinceLastRemoteCommit,
    writeOutputFiles,
    outputDir
  }

  if (fetchDepth) {
    inputs.fetchDepth = Math.max(parseInt(fetchDepth, 10), 2)
  }

  if (dirNamesMaxDepth) {
    inputs.dirNamesMaxDepth = parseInt(dirNamesMaxDepth, 10)
  }

  return inputs
}
