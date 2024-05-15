/**
 * This program and the accompanying materials are made available under the terms of the
 * Eclipse Public License v2.0 which accompanies this distribution, and is available at
 * https://www.eclipse.org/legal/epl-v20.html
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Copyright Contributors to the Zowe Project.
 *
 */

import { ICommandDefinition } from "@zowe/imperative";

import i18nTypings from "../../-strings-/en";

// Does not use the import in anticipation of some internationalization work to be done later.
const strings = (require("../../-strings-/en").default as typeof i18nTypings).DEFINE.RESOURCES.FILE;

export const FileDefinition: ICommandDefinition = {
  name: "file",
  description: strings.DESCRIPTION,
  handler: __dirname + "/File.handler",
  type: "command",
  positionals: [{
    name: "fileName",
    description: strings.POSITIONALS.FILENAME,
    type: "string",
    required: true
  }, {
    name: "csdGroup",
    description: strings.POSITIONALS.CSDGROUP,
    type: "string",
    required: true
  },],
  options: [
    {
      name: "region-name",
      description: strings.OPTIONS.REGIONNAME,
      type: "string"
    },
    {
      name: "cics-plex",
      description: strings.OPTIONS.CICSPLEX,
      type: "string"
    },
    {
      name: "datasetname",
      aliases: ["dsn"],
      description: strings.OPTIONS.DATASETNAME,
      type: "string"
    },
    {
      name: "description",
      aliases: ["desc"],
      description: strings.OPTIONS.DESCRIPTION,
      type: "string"
    },
    {
      name: "key-length",
      aliases: ["kl"],
      description: strings.OPTIONS.KEYLENGTH,
      type: "number"
    },
    {
      name: "record-size",
      aliases: ["rs"],
      description: strings.OPTIONS.RECORDSIZE,
      type: "number"
    },
    {
      name: "remote-system",
      description: strings.OPTIONS.REMOTESYSTEM,
      type: "string"
    },
    {
      name: "remote-name",
      description: strings.OPTIONS.REMOTENAME,
      type: "string"
    },
    {
      name: "operation-add",
      aliases: ["add"],
      description: strings.OPTIONS.OPERATIONADD,
      type: "boolean"
    },
    {
      name: "operation-browse",
      aliases: ["browse"],
      description: strings.OPTIONS.OPERATIONADD,
      type: "boolean"
    },
    {
      name: "operation-delete",
      aliases: ["delete"],
      description: strings.OPTIONS.OPERATIONADD,
      type: "boolean"
    },
    {
      name: "operation-read",
      aliases: ["read"],
      description: strings.OPTIONS.OPERATIONADD,
      type: "boolean"
    },
    {
      name: "operation-update",
      aliases: ["update"],
      description: strings.OPTIONS.OPERATIONADD,
      type: "boolean"
    }],
  profile: {optional: ["cics"]},
  examples: [{
    description: strings.EXAMPLES.EX1,
    options: "FIL010 MYGRP --region-name MYREGION --datasetname TEST.FILE.FIL010"
  },{
    description: strings.EXAMPLES.EX2,
    options: "REM100 MYGRP --region-name MYREGION --remote-system OTREGION --remote-name FIL010"
  },{
    description: strings.EXAMPLES.EX3,
    options: "RDO110 MYGRP --region-name MYREGION --datasetname TEST.FILE.FIL010 --read true --update false --browse true --add false"
  }]
};
