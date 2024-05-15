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
import { closeFile, ICMCIApiResponse } from "@zowe/cics-for-zowe-sdk";
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
      statusMessage: "Closing file to CICS",
      percentComplete: 0,
      stageName: TaskStage.IN_PROGRESS
    };
    params.response.progress.startBar({task: status});

    const response = await closeFile(session, {
      name: params.arguments.fileName,
      regionName: params.arguments.regionName || profile.regionName
    });

    params.response.console.log(strings.MESSAGES.SUCCESS, params.arguments.programName);
    return response;
  }
}
