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

// ******* ATTENTION:  LEASE KEEP IN ALPHABETICAL ORDER

export default {
  ADDTOLIST: {
    SUMMARY: "Add new resources to CICS",
    DESCRIPTION: "Add new resources (for example, CSD Groups to CSD Lists) to CICS through IBM CMCI.",
    RESOURCES: {
      CSDGROUP: {
        DESCRIPTION: "Add a CSD Group to a CICS CSD List.",
        POSITIONALS: {
          NAME: "The name of the CSD Group to add. The maximum length of the CSD Group name is eight characters",
          CSDLIST: "The name of the CSD List to add the group to. The maximum length of the CSD List name is eight characters",
        },
        OPTIONS: {
          REGIONNAME: "The CICS region name to which to add the CSD Group to the CSD List",
          CICSPLEX: "The name of the CICSPlex to which to add the CSD Group to the CSD List",
        },
        MESSAGES: {
          SUCCESS: "The CSD Group '%s' was successfully added to '%s'."
        },
        EXAMPLES: {
          EX1: "Add the CSD Group MYGRP to the CSD List MYLIST in the region named MYREG"
        }
      }
    }
  },
  DEFINE: {
    SUMMARY: "Define new resources to CICS",
    DESCRIPTION: "Define new resources (for example, programs) to CICS through IBM CMCI.",
    RESOURCES: {
      PROGRAM: {
        DESCRIPTION: "Define a new program to CICS.",
        POSITIONALS: {
          PROGRAMNAME: "The name of the new program to define. The maximum length of the program name is eight characters.",
          CSDGROUP: "The CICS system definition (CSD) Group for the new program that you want to define." +
                    " The maximum length of the group "
                    + "name is eight characters."
        },
        OPTIONS: {
          REGIONNAME: "The CICS region name to which to define the new program",
          CICSPLEX: "The name of the CICSPlex to which to define the new program"
        },
        MESSAGES: {
          SUCCESS: "The program '%s' was defined successfully."
        },
        EXAMPLES: {
          EX1: "Define a program named PGM123 to the region name MYREGION in the CSD group MYGRP"
        }
      },
      TRANSACTION: {
        DESCRIPTION: "Define a new transaction to CICS.",
        POSITIONALS: {
          TRANSACTIONNAME: "The name of the new transaction to define. The maximum length of the transaction name is four characters.",
          PROGRAMNAME: "The name of the program that the transaction uses. The maximum length of the program name is eight characters.",
          CSDGROUP: "The CICS system definition (CSD) Group for the new transaction that you want to define." +
                        " The maximum length of the group name is eight characters."
        },
        OPTIONS: {
          REGIONNAME: "The CICS region name to which to define the new transaction",
          CICSPLEX: "The name of the CICSPlex to which to define the new transaction"
        },
        MESSAGES: {
          SUCCESS: "The transaction '%s' was defined successfully."
        },
        EXAMPLES: {
          EX1: "Define a transaction named TRN1 for the program named PGM123 to the region named MYREGION " +
                        "in the CSD group MYGRP"
        }
      },
      URIMAP: {
        DESCRIPTION: {
          SERVER: "Define a new URIMAP of type server to CICS. This acts as an HTTP(S) server",
          CLIENT: "Define a new URIMAP of type client to CICS. This acts as an HTTP(S) client",
          PIPELINE: "Define a new URIMAP of type pipeline to CICS. This processes incoming HTTP(S) requests"
        },
        POSITIONALS: {
          URIMAPNAME: "The name of the URIMAP to create. The maximum length of the urimap name is eight characters.",
          CSDGROUP: "The CICS system definition (CSD) Group for the new urimap that you want to define." +
                        " The maximum length of the group name is eight characters."
        },
        OPTIONS: {
          URIMAPHOST: "The host component of the URI.",
          URIMAPPATH: "The path component of the URI.",
          URIMAPSCHEME: "The scheme component to be used with the request (http or https).",
          REGIONNAME: "The CICS region name to which to define the new URIMAP.",
          CICSPLEX: "The name of the CICSPlex to which to define the new URIMAP.",
          PROGRAMNAME: "The application program that makes or handles the requests.",
          PIPELINENAME: "The name of the PIPELINE resource definition for the URIMAP. " +
                        "The maximum length of the pipeline name is eight characters.",
          CERTIFICATE: "The label of a certificate in the keyring that is to be used as the client " +
                        "certificate in SSL handshakes",
          AUTHENTICATE: "The authentication and identification scheme to be used for client URIMAPs.",
          DESCRIPTION: "Description of the URIMAP resource being defined.",
          TRANSACTIONNAME: "The name of the TRANSACTION resource definition for the URIMAP. " +
                        "The maximum length of the transaction name is four characters.",
          WEBSERVICENAME: "The name of the WEBSERVICE resource definition for the URIMAP. " +
                        "The maximum length of the transaction name is 32 characters.",
          ENABLE: "Whether or not the URIMAP is to be enabled on install by default. ",
          TCPIPSERVICE: "The TCPIPSERVICE to which the URIMAP definition applies."
        },
        MESSAGES: {
          SUCCESS: "The URIMAP '%s' was defined successfully."
        },
        EXAMPLES: {
          SERVER: {
            EX1: "Define a URIMAP named URIMAPA for the program named PGM123 to the region named MYREGION " +
                            "in the CSD group MYGRP where the host is www.example.com and the path is /example/index.html"
          },
          CLIENT: {
            EX1: "Define a URIMAP named URIMAPA to the region named MYREGION in the CSD group MYGRP " +
                            "where the host is www.example.com and the path is /example/index.html"
          },
          PIPELINE: {
            EX1: "Define a URIMAP named URIMAPA for the pipeline named PIPE123 to the region named MYREGION " +
                            "in the CSD group MYGRP where the host is www.example.com and the path is /example/index.html"
          }
        }
      },
      WEBSERVICE: {
        DESCRIPTION: "Define a new web service to CICS.",
        POSITIONALS: {
          WEBSERVICENAME: "The name of the WEBSERVICE to create. The maximum length of the web service name is eight characters.",
          CSDGROUP: "The CICS system definition (CSD) Group for the new web service that you want to define." +
                        " The maximum length of the group name is eight characters."
        },
        OPTIONS: {
          PIPELINENAME: "The name of the PIPELINE resource definition for the web service." +
                        " The maximum length of the pipeline name is eight characters",
          WSBIND: "The file name of the web service binding file on HFS.",
          DESCRIPTION: "Description of the web service resource being defined.",
          VALIDATION: "Specifies whether full validation of SOAP messages against the corresponding schema in the web service " +
                        "description should be performed at run time.",
          WSDLFILE: "The file name of the web service description (WSDL) file on HFS.",
          REGIONNAME: "The CICS region name to which to define the new web service.",
          CICSPLEX: "The name of the CICSPlex to which to define the new web service."
        },
        MESSAGES: {
          SUCCESS: "The WEBSERVICE '%s' was defined successfully."
        },
        EXAMPLES: {
          EX1: "Define a webservice named WEBSVCA for the pipeline named PIPE123 to the region named MYREGION " +
                        "in the CSD group MYGRP where the binding file is /u/exampleapp/wsbind/example.log"
        }
      },
      FILE: {
        DESCRIPTION: "Define a new File to cics",
        POSITIONALS: {
          FILENAME: "specifies the name of the file. The name can be up to eight characters in length.",
          CSDGROUP: "The CICS system definition (CSD) Group for the new program that you want to define." +
                    " The maximum length of the group "
                    + "name is eight characters."

        },
        OPTIONS: {
          REGIONNAME: "The CICS region name to which to define the new program",
          CICSPLEX: "The name of the CICSPlex to which to define the new program",
          DATASETNAME: "specifies the data set name (as known to the operating system) to be used for this file.",
          DESCRIPTION: "You can provide a description of the resource you are defining in this field.",
          KEYLENGTH:"The length in bytes of the logical key of records in remote files,",
          RECORDSIZE:"The maximum length in bytes of records in a remote file ",
          REMOTESYSTEM:"The name you specify must be the name of the CONNECTION resource definition for the link to the remote CICS.4 characters length",
          REMOTENAME:"Specifies the name by which this file is known in the system or region in which it is resident.",
          OPERATIONADD:"Specifies that records can be added to the file. true by default",
          OPERATIONBROWSE:"Specifies that Records may be sequentially retrieved from the file. true by default",
          OPERATIONDELETE:"Specifies that Records in this file can be deleted. true by default",
          OPERATIONREAD:"Specifies that Records in this file can be read. READ is assumed, if you specify BROWSE or UPDATE. true by default",
          OPERATIONUPDATE:"Specifies that Records in this file can be changed. true by default",
        },
        MESSAGES: {
          SUCCESS: "The File '%s' was defined successfully."
        },
        EXAMPLES: {
          EX1: "Define a local file named FIL010 to the region name MYREGION in the CSD group MYGRP with the datasetname TEST.FILE.FIL010.",
          EX2: "Define a remote file named REM100 to the region name MYREGION in the CSD group MYGRP that points to the remote system OTREGION.",
          EX3: "Define a local file named RDO110 to the region name MYREGION in the CSD group MYGRP with the datasetname TEST.FILE.FIL010 for read only."
        }
      },
    }
  },
  DELETE: {
    SUMMARY: "Delete resources from CICS",
    DESCRIPTION: "Delete resources (for example, programs) from CICS through IBM CMCI.",
    RESOURCES: {
      PROGRAM: {
        DESCRIPTION: "Delete a program from CICS.",
        POSITIONALS: {
          PROGRAMNAME: "The name of the program to delete. The maximum length of the program name is eight characters.",
          CSDGROUP: "The CICS system definition (CSD) Group for the program that you want to delete." +
                        " The maximum length of the group name is eight characters."
        },
        OPTIONS: {
          REGIONNAME: "The CICS region name from which to delete the program",
          CICSPLEX: "The name of the CICSPlex from which to delete the program"
        },
        MESSAGES: {
          SUCCESS: "The program '%s' was deleted successfully."
        },
        EXAMPLES: {
          EX1: "Delete a program named PGM123 from the region named MYREGION"
        }
      },
      TRANSACTION: {
        DESCRIPTION: "Delete a transaction from CICS.",
        POSITIONALS: {
          TRANSACTIONNAME: "The name of the transaction to delete. The maximum length of the transaction name is four characters.",
          CSDGROUP: "The CICS system definition (CSD) Group for the transaction that you want to delete." +
                        " The maximum length of the group "
                        + "name is eight characters."
        },
        OPTIONS: {
          REGIONNAME: "The CICS region name from which to delete the transaction",
          CICSPLEX: "The name of the CICSPlex from which to delete the transaction"
        },
        MESSAGES: {
          SUCCESS: "The transaction '%s' was deleted successfully."
        },
        EXAMPLES: {
          EX1: "Delete a transaction named TRN1 from the region named MYREGION"
        }
      },
      URIMAP: {
        DESCRIPTION: "Delete a urimap from CICS.",
        POSITIONALS: {
          URIMAPNAME: "The name of the urimap to delete. The maximum length of the urimap name is eight characters.",
          CSDGROUP: "The CICS system definition (CSD) Group for the urimap that you want to delete." +
                        " The maximum length of the group name is eight characters."
        },
        OPTIONS: {
          REGIONNAME: "The CICS region name from which to delete the urimap"
        },
        MESSAGES: {
          SUCCESS: "The urimap '%s' was deleted successfully."
        },
        EXAMPLES: {
          EX1: "Delete a urimap named URIMAPA from the region named MYREGION belonging to the csdgroup MYGRP"
        }
      },
      WEBSERVICE: {
        DESCRIPTION: "Delete a web service from CICS.",
        POSITIONALS: {
          WEBSERVICENAME: "The name of the web service to delete. The maximum length of the web service name is eight characters.",
          CSDGROUP: "The CICS system definition (CSD) Group for the web service that you want to delete." +
                        " The maximum length of the group name is eight characters."
        },
        OPTIONS: {
          REGIONNAME: "The CICS region name from which to delete the web service"
        },
        MESSAGES: {
          SUCCESS: "The web service '%s' was deleted successfully."
        },
        EXAMPLES: {
          EX1: "Delete a web service named WEBSVCA from the region named MYREGION belonging to the csdgroup MYGRP"
        }
      }
    }
  },
  DISABLE: {
    SUMMARY: "Disable resources from CICS",
    DESCRIPTION: "Disable resources (for example, urimaps) from CICS through IBM CMCI.",
    RESOURCES: {
      URIMAP: {
        DESCRIPTION: "Disable a urimap from CICS.",
        POSITIONALS: {
          URIMAPNAME: "The name of the urimap to disable. The maximum length of the urimap name is eight characters."
        },
        OPTIONS: {
          REGIONNAME: "The CICS region name in which to disable the urimap"
        },
        MESSAGES: {
          SUCCESS: "The urimap '%s' was disabled successfully."
        },
        EXAMPLES: {
          EX1: "Disable a urimap named URIMAPA from the region named MYREGION"
        }
      },
      FILE: {
        DESCRIPTION: "Disable a Local File from CICS.",
        POSITIONALS: {
          FILENAME: "The name of the local file to disable. The maximum length of the urimap name is eight characters."
        },
        OPTIONS: {
          REGIONNAME: "The CICS region name in which to disable the urimap"
        },
        MESSAGES: {
          SUCCESS: "The urimap '%s' was disabled successfully."
        },
        EXAMPLES: {
          EX1: "Disable a FILE named FILELOCL from the region named MYREGION"
        }
      }
    }
  },
  DISCARD: {
    SUMMARY: "Discard resources from CICS",
    DESCRIPTION: "Discard resources (for example, programs) from CICS through IBM CMCI.",
    RESOURCES: {
      PROGRAM: {
        DESCRIPTION: "Discard a program from CICS.",
        POSITIONALS: {
          PROGRAMNAME: "The name of the program to discard. The maximum length of the program name is eight characters."
        },
        OPTIONS: {
          REGIONNAME: "The CICS region name from which to discard the program",
          CICSPLEX: "The name of the CICSPlex from which to discard the program"
        },
        MESSAGES: {
          SUCCESS: "The program '%s' was discarded successfully."
        },
        EXAMPLES: {
          EX1: "Discard a program named PGM123 from the region named MYREGION"
        }
      },
      TRANSACTION: {
        DESCRIPTION: "Discard a transaction from CICS.",
        POSITIONALS: {
          TRANSACTIONNAME: "The name of the transaction to discard. The maximum length of the transaction name is four characters."
        },
        OPTIONS: {
          REGIONNAME: "The CICS region name from which to discard the transaction",
          CICSPLEX: "The name of the CICSPlex from which to discard the transaction"
        },
        MESSAGES: {
          SUCCESS: "The transaction '%s' was discarded successfully."
        },
        EXAMPLES: {
          EX1: "Discard a transaction named TRN1 from the region named MYREGION"
        }
      },
      URIMAP: {
        DESCRIPTION: "Discard a urimap from CICS.",
        POSITIONALS: {
          URIMAPNAME: "The name of the urimap to discard. The maximum length of the urimap name is eight characters.",
        },
        OPTIONS: {
          REGIONNAME: "The CICS region name from which to discard the urimap"
        },
        MESSAGES: {
          SUCCESS: "The urimap '%s' was discarded successfully."
        },
        EXAMPLES: {
          EX1: "Discard a urimap named URIMAPA from the region named MYREGION"
        }
      },
      FILE: {
        DESCRIPTION: "Discard a local or remote file from CICS.",
        POSITIONALS: {
          FILENAME: "The name of the file to discard. The maximum length of the urimap name is eight characters.",
        },
        OPTIONS: {
          REGIONNAME: "The CICS region name from which to discard the urimap",
          REMOTEFILE: "Specifies that the file is defined as Remote, if not specified the file is assumed as local"
        },
        MESSAGES: {
          SUCCESS: "The file '%s' was discarded successfully."
        },
        EXAMPLES: {
          EX1: "Discard a local file named FILELCL from the region named MYREGION",
          EX2: "Discard a remote file named FILERMT from the region named MYREGION"
        }
      }
    }
  },
  ENABLE: {
    SUMMARY: "Enable resources from CICS",
    DESCRIPTION: "Enable resources (for example, urimaps) from CICS through IBM CMCI.",
    RESOURCES: {
      URIMAP: {
        DESCRIPTION: "Enable a urimap from CICS.",
        POSITIONALS: {
          URIMAPNAME: "The name of the urimap to enable. The maximum length of the urimap name is eight characters."
        },
        OPTIONS: {
          REGIONNAME: "The CICS region name in which to enable the urimap"
        },
        MESSAGES: {
          SUCCESS: "The urimap '%s' was enabled successfully."
        },
        EXAMPLES: {
          EX1: "Enable a urimap named URIMAPA from the region named MYREGION"
        }
      }
    }
  },
  GET: {
    SUMMARY: "Get resources from CICS",
    DESCRIPTION: "Get resources (for example, programs or transactions) from CICS through IBM CMCI.",
    RESOURCES: {
      RESOURCE: {
        DESCRIPTION: "Get resources (for example, programs or transactions) from CICS.",
        POSITIONALS: {
          RESOURCENAME: "The name of the resource to get.",
        },
        OPTIONS: {
          REGIONNAME: "The CICS region name from which to get the resources",
          CICSPLEX: "The name of the CICSPlex from which to get the resources",
          CRITERIA: "The criteria by which to filter the resource",
          PARAMETER: "The parameter by which to refine the resource"
        },
        MESSAGES: {
          SUCCESS: "The resource(s) for '%s' were retrieved successfully."
        },
        EXAMPLES: {
          EX1: "Get program resources from the region named MYREGION",
          EX2: "Get local transaction resources from the region named MYREGION",
          EX3: "Get local file resources from the region named MYREGION",
          EX4: "Get program definition resources from the CSD group named GRP1 and the region named MYREGION",
          EX5: "Get transaction definition resources from the CSD group named GRP1 and the region named MYREGION",
          EX6: "Get URIMap definition resources from the CSD group named GRP1 and the region named MYREGION",
          EX7: "Get program resources that start with the name PRG from the region named MYREGION",
          EX8: "Get a local transaction resource named TRAN from the region named MYREGION",
          EX9: "Get program resources that start with the name MYPRG from the region named MYREGION and display various fields as a table",
        }
      }
    }
  },
  INSTALL: {
    SUMMARY: "Install resources to CICS",
    DESCRIPTION: "Install resources (for example, programs) to CICS through IBM CMCI.",
    RESOURCES: {
      PROGRAM: {
        DESCRIPTION: "Install a program to CICS.",
        POSITIONALS: {
          PROGRAMNAME: "The name of the program to install. The maximum length of the program name is eight characters.",
          CSDGROUP: "The CICS system definition (CSD) Group for the program that you want to install." +
                        " The maximum length of the group name is eight characters."
        },
        OPTIONS: {
          REGIONNAME: "The CICS region name to which to install the program",
          CICSPLEX: "The name of the CICSPlex to which to install the program"
        },
        MESSAGES: {
          SUCCESS: "The program named '%s' was installed successfully."
        },
        EXAMPLES: {
          EX1: "Install a program named PGM123 to the region named MYREGION in the CSD group MYGRP"
        }
      },
      TRANSACTION: {
        DESCRIPTION: "Install a transaction to CICS.",
        POSITIONALS: {
          TRANSACTIONNAME: "The name of the transaction to install. The maximum length of the transaction name is four characters.",
          CSDGROUP: "The CICS system definition (CSD) Group for the transaction that you want to install." +
                        " The maximum length of the group name is eight characters."
        },
        OPTIONS: {
          REGIONNAME: "The CICS region name to which to install the transaction",
          CICSPLEX: "The name of the CICSPlex to which to install the transaction"
        },
        MESSAGES: {
          SUCCESS: "The transaction '%s' was installed successfully."
        },
        EXAMPLES: {
          EX1: "Install a transaction named TRN1 to the region named MYREGION " +
                        "in the CSD group MYGRP",
        }
      },
      URIMAP: {
        DESCRIPTION: "Install a urimap to CICS.",
        POSITIONALS: {
          URIMAPNAME: "The name of the urimap to install. The maximum length of the urimap name is eight characters.",
          CSDGROUP: "The CICS system definition (CSD) Group for the urimap that you want to install." +
                        " The maximum length of the group name is eight characters."
        },
        OPTIONS: {
          REGIONNAME: "The CICS region name to which to install the urimap"
        },
        MESSAGES: {
          SUCCESS: "The urimap '%s' was installed successfully."
        },
        EXAMPLES: {
          EX1: "Install a urimap named URIMAPA to the region named MYREGION belonging to the csdgroup MYGRP"
        }
      },
      FILE:{
        DESCRIPTION: "Install a File to CICS.",
        POSITIONALS: {
          FILENAME: "The name of the file to install. The maximum length of the program name is eight characters.",
          CSDGROUP: "The CICS system definition (CSD) Group for the program that you want to install." +
                        " The maximum length of the group name is eight characters."
        },
        OPTIONS: {
          REGIONNAME: "The CICS region name to which to install the program",
          CICSPLEX: "The name of the CICSPlex to which to install the program"
        },
        MESSAGES: {
          SUCCESS: "The file named '%s' was installed successfully."
        },
        EXAMPLES: {
          EX1: "Install a file named FIL123 to the region named MYREGION in the CSD group MYGRP"
        }
      },
    }
  },
  REFRESH: {
    SUMMARY: "Refresh program on CICS",
    DESCRIPTION: "Refresh a program on CICS through IBM CMCI.",
    RESOURCES: {
      PROGRAM: {
        DESCRIPTION: "Refresh a program on CICS.",
        POSITIONALS: {
          PROGRAMNAME: "The name of the program to refresh. The maximum length of the program name is eight characters."
        },
        OPTIONS: {
          REGIONNAME: "The CICS region name on which you want to refresh the program",
          CICSPLEX: "The name of the CICSPlex on which to refresh the program"
        },
        MESSAGES: {
          SUCCESS: "The program '%s' was refreshed successfully."
        },
        EXAMPLES: {
          DEFINE_EXAMPLE_ONE: "Refresh a program named PGM123 from the region named MYREGION"
        }
      }
    }
  },
  REMOVEFROMLIST: {
    SUMMARY: "Remove resources from CICS",
    DESCRIPTION: "Remove resources (for example, CSD Groups in CSD Lists) from CICS through IBM CMCI.",
    RESOURCES: {
      CSDGROUP: {
        DESCRIPTION: "Remove a CSD Group from a CICS CSD List.",
        POSITIONALS: {
          NAME: "The name of the CSD Group to remove. The maximum length of the CSD Group name is eight characters",
          CSDLIST: "The name of the CSD List to remove the group from. The maximum length of the CSD List name is eight characters",
        },
        OPTIONS: {
          REGIONNAME: "The CICS region name to which to remove the CSD Group from the CSD List",
          CICSPLEX: "The name of the CICSPlex to which to remove the CSD Group from the CSD List",
        },
        MESSAGES: {
          SUCCESS: "The CSD Group '%s' was successfully removed from '%s'."
        },
        EXAMPLES: {
          EX1: "Remove the CSD Group MYGRP from the CSD List MYLIST in the region named MYREG"
        }
      }
    }
  },
  CLOSE: {
    SUMMARY: "Close resources from CICS",
    DESCRIPTION: "Closes resources (for example, files) from CICS through IBM CMCI.",
    RESOURCES: {
      FILE: {
        DESCRIPTION: "Close a local file from CICS.",
        POSITIONALS: {
          FILENAME: "The name of the file to close. The maximum length of the urimap name is eight characters."
        },
        OPTIONS: {
          REGIONNAME: "The CICS region name in which to close the file"
        },
        MESSAGES: {
          SUCCESS: "The file '%s' was enabled successfully."
        },
        EXAMPLES: {
          EX1: "Close a file named FILELCL from the region named MYREGION"
        }
      }
    }
  },
};
