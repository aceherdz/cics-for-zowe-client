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

import { AbstractSession, IHandlerParameters, IProfile, ITaskWithStatus, TaskStage } from "@zowe/imperative";
import { defineFile, ICMCIApiResponse } from "@zowe/cics-for-zowe-sdk";
import { CicsBaseHandler } from "../../CicsBaseHandler";

import i18nTypings from "../../-strings-/en";

// Does not use the import in anticipation of some internationalization work to be done later.
const strings = (require("../../-strings-/en").default as typeof i18nTypings).DEFINE.RESOURCES.FILE;

/**
 * Command handler for defining CICS programs via CMCI
 * @export
 * @class FileHandler
 * @implements {ICommandHandler}
 */
export default class FileHandler extends CicsBaseHandler {
  public async processWithSession(params: IHandlerParameters, session: AbstractSession, profile: IProfile): Promise<ICMCIApiResponse> {

    const status: ITaskWithStatus = {
      statusMessage: "Defining file to CICS",
      percentComplete: 0,
      stageName: TaskStage.IN_PROGRESS
    };
    params.response.progress.startBar({task: status});

    const response = await defineFile(session, {
      name: params.arguments.fileName,
      csdGroup: params.arguments.csdGroup,
      regionName: params.arguments.regionName || profile.regionName,
      cicsPlex: params.arguments.cicsPlex || profile.cicsPlex,
      datasetname: params.arguments.datasetname,
      description: params.arguments.description,
      keyLength: params.arguments.keyLength,
      recordSize: params.arguments.recordSize,
      remoteSystem:params.arguments.remoteSystem,
      remoteName:params.arguments.remoteName,
      operationAdd: params.arguments.operationAdd ?? true,
      operationBrowse: params.arguments.operationBrowse ?? true,
      operationDelete: params.arguments.operationDelete ?? true,
      operationRead:params.arguments.operationRead ?? true,
      operationUpdate:params.arguments.operationUpdate ?? true,
    });

    params.response.console.log(strings.MESSAGES.SUCCESS, params.arguments.fileName);
    return response;
  }
}
