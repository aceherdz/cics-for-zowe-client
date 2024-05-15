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

import { AbstractSession, ImperativeExpect, Logger } from "@zowe/imperative";
import { CicsCmciRestClient } from "../../rest";
import { CicsCmciConstants } from "../../constants";
import { ICMCIApiResponse, IFileParms, IProgramParms, IURIMapParms } from "../../doc";

export async function closeFile(session: AbstractSession, parms: IFileParms): Promise<ICMCIApiResponse> {
    ImperativeExpect.toBeDefinedAndNonBlank(parms.name, "CICS File name", "CICS File name is required");
    ImperativeExpect.toBeDefinedAndNonBlank(parms.regionName, "CICS Region name", "CICS region name is required");

    Logger.getAppLogger().debug("Attempting to disable a File with the following parameters:\n%s", JSON.stringify(parms));

    const cicsPlex = parms.cicsPlex == null ? "" : parms.cicsPlex + "/";
    const cmciResource = "/" + CicsCmciConstants.CICS_SYSTEM_MANAGEMENT + "/" +
          CicsCmciConstants.CICS_LOCAL_FILE + "/" + cicsPlex +
          `${parms.regionName}?CRITERIA=(FILE=${parms.name})`;
    const requestBody: any = {
      request: {
        action: {
            $: {
              name: "CLOSE"
            },
            parameter:{
              $: {
                name: "BUSY",
                value:"WAIT"
              }
            }
        },
      }
    };
    return CicsCmciRestClient.putExpectParsedXml(session, cmciResource, [], requestBody);
  }
