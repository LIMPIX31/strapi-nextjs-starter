/* eslint-disable */
/* prettier-ignore */

/** An IntrospectionQuery representation of your schema.
 *
 * @remarks
 * This is an introspection of your schema saved as a file by GraphQLSP.
 * It will automatically be used by `gql.tada` to infer the types of your GraphQL documents.
 * If you need to reuse this data or update your `scalars`, update `tadaOutputLocation` to
 * instead save to a .ts instead of a .d.ts file.
 */
export type introspection = {
  "__schema": {
    "queryType": {
      "name": "Query"
    },
    "mutationType": {
      "name": "Mutation"
    },
    "subscriptionType": null,
    "types": [
      {
        "kind": "INPUT_OBJECT",
        "name": "BooleanFilterInput",
        "inputFields": [
          {
            "name": "and",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            }
          },
          {
            "name": "between",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            }
          },
          {
            "name": "contains",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "containsi",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "endsWith",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "eq",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "eqi",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "gt",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "gte",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            }
          },
          {
            "name": "lt",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "lte",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "ne",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "nei",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "BooleanFilterInput",
              "ofType": null
            }
          },
          {
            "name": "notContains",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "notContainsi",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "notIn",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            }
          },
          {
            "name": "notNull",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "null",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "or",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            }
          },
          {
            "name": "startsWith",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "SCALAR",
        "name": "Boolean"
      },
      {
        "kind": "SCALAR",
        "name": "Date"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DateFilterInput",
        "inputFields": [
          {
            "name": "and",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Date",
                "ofType": null
              }
            }
          },
          {
            "name": "between",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Date",
                "ofType": null
              }
            }
          },
          {
            "name": "contains",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            }
          },
          {
            "name": "containsi",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            }
          },
          {
            "name": "endsWith",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            }
          },
          {
            "name": "eq",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            }
          },
          {
            "name": "eqi",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            }
          },
          {
            "name": "gt",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            }
          },
          {
            "name": "gte",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            }
          },
          {
            "name": "in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Date",
                "ofType": null
              }
            }
          },
          {
            "name": "lt",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            }
          },
          {
            "name": "lte",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            }
          },
          {
            "name": "ne",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            }
          },
          {
            "name": "nei",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateFilterInput",
              "ofType": null
            }
          },
          {
            "name": "notContains",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            }
          },
          {
            "name": "notContainsi",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            }
          },
          {
            "name": "notIn",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Date",
                "ofType": null
              }
            }
          },
          {
            "name": "notNull",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "null",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "or",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Date",
                "ofType": null
              }
            }
          },
          {
            "name": "startsWith",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "SCALAR",
        "name": "DateTime"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DateTimeFilterInput",
        "inputFields": [
          {
            "name": "and",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            }
          },
          {
            "name": "between",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            }
          },
          {
            "name": "contains",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "containsi",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "endsWith",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "eq",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "eqi",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "gt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "gte",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            }
          },
          {
            "name": "lt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "lte",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "ne",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "nei",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilterInput",
              "ofType": null
            }
          },
          {
            "name": "notContains",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "notContainsi",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "notIn",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            }
          },
          {
            "name": "notNull",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "null",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "or",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            }
          },
          {
            "name": "startsWith",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Error",
        "fields": [
          {
            "name": "code",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "message",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "String"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "FileInfoInput",
        "inputFields": [
          {
            "name": "alternativeText",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "caption",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "FloatFilterInput",
        "inputFields": [
          {
            "name": "and",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            }
          },
          {
            "name": "between",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            }
          },
          {
            "name": "contains",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            }
          },
          {
            "name": "containsi",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            }
          },
          {
            "name": "endsWith",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            }
          },
          {
            "name": "eq",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            }
          },
          {
            "name": "eqi",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            }
          },
          {
            "name": "gt",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            }
          },
          {
            "name": "gte",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            }
          },
          {
            "name": "in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            }
          },
          {
            "name": "lt",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            }
          },
          {
            "name": "lte",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            }
          },
          {
            "name": "ne",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            }
          },
          {
            "name": "nei",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "FloatFilterInput",
              "ofType": null
            }
          },
          {
            "name": "notContains",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            }
          },
          {
            "name": "notContainsi",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            }
          },
          {
            "name": "notIn",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            }
          },
          {
            "name": "notNull",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "null",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "or",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            }
          },
          {
            "name": "startsWith",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "SCALAR",
        "name": "Float"
      },
      {
        "kind": "UNION",
        "name": "GenericMorph",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "I18NLocale"
          },
          {
            "kind": "OBJECT",
            "name": "Todo"
          },
          {
            "kind": "OBJECT",
            "name": "UploadFile"
          },
          {
            "kind": "OBJECT",
            "name": "UploadFolder"
          },
          {
            "kind": "OBJECT",
            "name": "UsersPermissionsPermission"
          },
          {
            "kind": "OBJECT",
            "name": "UsersPermissionsRole"
          },
          {
            "kind": "OBJECT",
            "name": "UsersPermissionsUser"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "I18NLocale",
        "fields": [
          {
            "name": "code",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "I18NLocaleCode"
      },
      {
        "kind": "OBJECT",
        "name": "I18NLocaleEntity",
        "fields": [
          {
            "name": "attributes",
            "type": {
              "kind": "OBJECT",
              "name": "I18NLocale",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "ID"
      },
      {
        "kind": "OBJECT",
        "name": "I18NLocaleEntityResponse",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "OBJECT",
              "name": "I18NLocaleEntity",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "I18NLocaleEntityResponseCollection",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "I18NLocaleEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "meta",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ResponseCollectionMeta",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "I18NLocaleFiltersInput",
        "inputFields": [
          {
            "name": "and",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "I18NLocaleFiltersInput",
                "ofType": null
              }
            }
          },
          {
            "name": "code",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilterInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilterInput",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IDFilterInput",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilterInput",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "I18NLocaleFiltersInput",
              "ofType": null
            }
          },
          {
            "name": "or",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "I18NLocaleFiltersInput",
                "ofType": null
              }
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilterInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "I18NLocaleInput",
        "inputFields": [
          {
            "name": "code",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "I18NLocaleRelationResponseCollection",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "I18NLocaleEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "IDFilterInput",
        "inputFields": [
          {
            "name": "and",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "name": "between",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "name": "contains",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          },
          {
            "name": "containsi",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          },
          {
            "name": "endsWith",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          },
          {
            "name": "eq",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          },
          {
            "name": "eqi",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          },
          {
            "name": "gt",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          },
          {
            "name": "gte",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          },
          {
            "name": "in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "name": "lt",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          },
          {
            "name": "lte",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          },
          {
            "name": "ne",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          },
          {
            "name": "nei",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IDFilterInput",
              "ofType": null
            }
          },
          {
            "name": "notContains",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          },
          {
            "name": "notContainsi",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          },
          {
            "name": "notIn",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "name": "notNull",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "null",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "or",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "name": "startsWith",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "IntFilterInput",
        "inputFields": [
          {
            "name": "and",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            }
          },
          {
            "name": "between",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            }
          },
          {
            "name": "contains",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "containsi",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "endsWith",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "eq",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "eqi",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "gt",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "gte",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            }
          },
          {
            "name": "lt",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "lte",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "ne",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "nei",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IntFilterInput",
              "ofType": null
            }
          },
          {
            "name": "notContains",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "notContainsi",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "notIn",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            }
          },
          {
            "name": "notNull",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "null",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "or",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            }
          },
          {
            "name": "startsWith",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "SCALAR",
        "name": "Int"
      },
      {
        "kind": "SCALAR",
        "name": "JSON"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "JSONFilterInput",
        "inputFields": [
          {
            "name": "and",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "JSON",
                "ofType": null
              }
            }
          },
          {
            "name": "between",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "JSON",
                "ofType": null
              }
            }
          },
          {
            "name": "contains",
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            }
          },
          {
            "name": "containsi",
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            }
          },
          {
            "name": "endsWith",
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            }
          },
          {
            "name": "eq",
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            }
          },
          {
            "name": "eqi",
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            }
          },
          {
            "name": "gt",
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            }
          },
          {
            "name": "gte",
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            }
          },
          {
            "name": "in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "JSON",
                "ofType": null
              }
            }
          },
          {
            "name": "lt",
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            }
          },
          {
            "name": "lte",
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            }
          },
          {
            "name": "ne",
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            }
          },
          {
            "name": "nei",
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "JSONFilterInput",
              "ofType": null
            }
          },
          {
            "name": "notContains",
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            }
          },
          {
            "name": "notContainsi",
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            }
          },
          {
            "name": "notIn",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "JSON",
                "ofType": null
              }
            }
          },
          {
            "name": "notNull",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "null",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "or",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "JSON",
                "ofType": null
              }
            }
          },
          {
            "name": "startsWith",
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "SCALAR",
        "name": "Long"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LongFilterInput",
        "inputFields": [
          {
            "name": "and",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Long",
                "ofType": null
              }
            }
          },
          {
            "name": "between",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Long",
                "ofType": null
              }
            }
          },
          {
            "name": "contains",
            "type": {
              "kind": "SCALAR",
              "name": "Long",
              "ofType": null
            }
          },
          {
            "name": "containsi",
            "type": {
              "kind": "SCALAR",
              "name": "Long",
              "ofType": null
            }
          },
          {
            "name": "endsWith",
            "type": {
              "kind": "SCALAR",
              "name": "Long",
              "ofType": null
            }
          },
          {
            "name": "eq",
            "type": {
              "kind": "SCALAR",
              "name": "Long",
              "ofType": null
            }
          },
          {
            "name": "eqi",
            "type": {
              "kind": "SCALAR",
              "name": "Long",
              "ofType": null
            }
          },
          {
            "name": "gt",
            "type": {
              "kind": "SCALAR",
              "name": "Long",
              "ofType": null
            }
          },
          {
            "name": "gte",
            "type": {
              "kind": "SCALAR",
              "name": "Long",
              "ofType": null
            }
          },
          {
            "name": "in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Long",
                "ofType": null
              }
            }
          },
          {
            "name": "lt",
            "type": {
              "kind": "SCALAR",
              "name": "Long",
              "ofType": null
            }
          },
          {
            "name": "lte",
            "type": {
              "kind": "SCALAR",
              "name": "Long",
              "ofType": null
            }
          },
          {
            "name": "ne",
            "type": {
              "kind": "SCALAR",
              "name": "Long",
              "ofType": null
            }
          },
          {
            "name": "nei",
            "type": {
              "kind": "SCALAR",
              "name": "Long",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LongFilterInput",
              "ofType": null
            }
          },
          {
            "name": "notContains",
            "type": {
              "kind": "SCALAR",
              "name": "Long",
              "ofType": null
            }
          },
          {
            "name": "notContainsi",
            "type": {
              "kind": "SCALAR",
              "name": "Long",
              "ofType": null
            }
          },
          {
            "name": "notIn",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Long",
                "ofType": null
              }
            }
          },
          {
            "name": "notNull",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "null",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "or",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Long",
                "ofType": null
              }
            }
          },
          {
            "name": "startsWith",
            "type": {
              "kind": "SCALAR",
              "name": "Long",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Mutation",
        "fields": [
          {
            "name": "changePassword",
            "type": {
              "kind": "OBJECT",
              "name": "UsersPermissionsLoginPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "currentPassword",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "password",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "passwordConfirmation",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "createTodo",
            "type": {
              "kind": "OBJECT",
              "name": "TodoEntityResponse",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "TodoInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "createUploadFile",
            "type": {
              "kind": "OBJECT",
              "name": "UploadFileEntityResponse",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UploadFileInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "createUploadFolder",
            "type": {
              "kind": "OBJECT",
              "name": "UploadFolderEntityResponse",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UploadFolderInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "createUsersPermissionsRole",
            "type": {
              "kind": "OBJECT",
              "name": "UsersPermissionsCreateRolePayload",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UsersPermissionsRoleInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "createUsersPermissionsUser",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UsersPermissionsUserEntityResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UsersPermissionsUserInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "deleteTodo",
            "type": {
              "kind": "OBJECT",
              "name": "TodoEntityResponse",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "deleteUploadFile",
            "type": {
              "kind": "OBJECT",
              "name": "UploadFileEntityResponse",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "deleteUploadFolder",
            "type": {
              "kind": "OBJECT",
              "name": "UploadFolderEntityResponse",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "deleteUsersPermissionsRole",
            "type": {
              "kind": "OBJECT",
              "name": "UsersPermissionsDeleteRolePayload",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "deleteUsersPermissionsUser",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UsersPermissionsUserEntityResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "emailConfirmation",
            "type": {
              "kind": "OBJECT",
              "name": "UsersPermissionsLoginPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "confirmation",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "forgotPassword",
            "type": {
              "kind": "OBJECT",
              "name": "UsersPermissionsPasswordPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "email",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "login",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UsersPermissionsLoginPayload",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UsersPermissionsLoginInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "multipleUpload",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "UploadFileEntityResponse",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "field",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "files",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Upload",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "ref",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "refId",
                "type": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "register",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UsersPermissionsLoginPayload",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UsersPermissionsRegisterInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "removeFile",
            "type": {
              "kind": "OBJECT",
              "name": "UploadFileEntityResponse",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "resetPassword",
            "type": {
              "kind": "OBJECT",
              "name": "UsersPermissionsLoginPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "code",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "password",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "passwordConfirmation",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "updateFileInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UploadFileEntityResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              },
              {
                "name": "info",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "FileInfoInput",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "updateTodo",
            "type": {
              "kind": "OBJECT",
              "name": "TodoEntityResponse",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "TodoInput",
                    "ofType": null
                  }
                }
              },
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "updateUploadFile",
            "type": {
              "kind": "OBJECT",
              "name": "UploadFileEntityResponse",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UploadFileInput",
                    "ofType": null
                  }
                }
              },
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "updateUploadFolder",
            "type": {
              "kind": "OBJECT",
              "name": "UploadFolderEntityResponse",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UploadFolderInput",
                    "ofType": null
                  }
                }
              },
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "updateUsersPermissionsRole",
            "type": {
              "kind": "OBJECT",
              "name": "UsersPermissionsUpdateRolePayload",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UsersPermissionsRoleInput",
                    "ofType": null
                  }
                }
              },
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "updateUsersPermissionsUser",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UsersPermissionsUserEntityResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UsersPermissionsUserInput",
                    "ofType": null
                  }
                }
              },
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "upload",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UploadFileEntityResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "field",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "file",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Upload",
                    "ofType": null
                  }
                }
              },
              {
                "name": "info",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "FileInfoInput",
                  "ofType": null
                }
              },
              {
                "name": "ref",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "refId",
                "type": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Pagination",
        "fields": [
          {
            "name": "page",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "pageCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "pageSize",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "total",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "PaginationArg",
        "inputFields": [
          {
            "name": "limit",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "page",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "pageSize",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "start",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "PublicationState",
        "enumValues": [
          {
            "name": "LIVE"
          },
          {
            "name": "PREVIEW"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Query",
        "fields": [
          {
            "name": "i18NLocale",
            "type": {
              "kind": "OBJECT",
              "name": "I18NLocaleEntityResponse",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "i18NLocales",
            "type": {
              "kind": "OBJECT",
              "name": "I18NLocaleEntityResponseCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "filters",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "I18NLocaleFiltersInput",
                  "ofType": null
                }
              },
              {
                "name": "pagination",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "PaginationArg",
                  "ofType": null
                }
              },
              {
                "name": "sort",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "me",
            "type": {
              "kind": "OBJECT",
              "name": "UsersPermissionsMe",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "todo",
            "type": {
              "kind": "OBJECT",
              "name": "TodoEntityResponse",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "todos",
            "type": {
              "kind": "OBJECT",
              "name": "TodoEntityResponseCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "filters",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "TodoFiltersInput",
                  "ofType": null
                }
              },
              {
                "name": "pagination",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "PaginationArg",
                  "ofType": null
                }
              },
              {
                "name": "publicationState",
                "type": {
                  "kind": "ENUM",
                  "name": "PublicationState",
                  "ofType": null
                }
              },
              {
                "name": "sort",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "uploadFile",
            "type": {
              "kind": "OBJECT",
              "name": "UploadFileEntityResponse",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "uploadFiles",
            "type": {
              "kind": "OBJECT",
              "name": "UploadFileEntityResponseCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "filters",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "UploadFileFiltersInput",
                  "ofType": null
                }
              },
              {
                "name": "pagination",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "PaginationArg",
                  "ofType": null
                }
              },
              {
                "name": "sort",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "uploadFolder",
            "type": {
              "kind": "OBJECT",
              "name": "UploadFolderEntityResponse",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "uploadFolders",
            "type": {
              "kind": "OBJECT",
              "name": "UploadFolderEntityResponseCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "filters",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "UploadFolderFiltersInput",
                  "ofType": null
                }
              },
              {
                "name": "pagination",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "PaginationArg",
                  "ofType": null
                }
              },
              {
                "name": "sort",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "usersPermissionsRole",
            "type": {
              "kind": "OBJECT",
              "name": "UsersPermissionsRoleEntityResponse",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "usersPermissionsRoles",
            "type": {
              "kind": "OBJECT",
              "name": "UsersPermissionsRoleEntityResponseCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "filters",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "UsersPermissionsRoleFiltersInput",
                  "ofType": null
                }
              },
              {
                "name": "pagination",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "PaginationArg",
                  "ofType": null
                }
              },
              {
                "name": "sort",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "usersPermissionsUser",
            "type": {
              "kind": "OBJECT",
              "name": "UsersPermissionsUserEntityResponse",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "usersPermissionsUsers",
            "type": {
              "kind": "OBJECT",
              "name": "UsersPermissionsUserEntityResponseCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "filters",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "UsersPermissionsUserFiltersInput",
                  "ofType": null
                }
              },
              {
                "name": "pagination",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "PaginationArg",
                  "ofType": null
                }
              },
              {
                "name": "sort",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ResponseCollectionMeta",
        "fields": [
          {
            "name": "pagination",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Pagination",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "StringFilterInput",
        "inputFields": [
          {
            "name": "and",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "between",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "containsi",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "endsWith",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "eq",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "eqi",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "gt",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "gte",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "lt",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "lte",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "ne",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "nei",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilterInput",
              "ofType": null
            }
          },
          {
            "name": "notContains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "notContainsi",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "notIn",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "notNull",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "null",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "or",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "startsWith",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "SCALAR",
        "name": "Time"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "TimeFilterInput",
        "inputFields": [
          {
            "name": "and",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Time",
                "ofType": null
              }
            }
          },
          {
            "name": "between",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Time",
                "ofType": null
              }
            }
          },
          {
            "name": "contains",
            "type": {
              "kind": "SCALAR",
              "name": "Time",
              "ofType": null
            }
          },
          {
            "name": "containsi",
            "type": {
              "kind": "SCALAR",
              "name": "Time",
              "ofType": null
            }
          },
          {
            "name": "endsWith",
            "type": {
              "kind": "SCALAR",
              "name": "Time",
              "ofType": null
            }
          },
          {
            "name": "eq",
            "type": {
              "kind": "SCALAR",
              "name": "Time",
              "ofType": null
            }
          },
          {
            "name": "eqi",
            "type": {
              "kind": "SCALAR",
              "name": "Time",
              "ofType": null
            }
          },
          {
            "name": "gt",
            "type": {
              "kind": "SCALAR",
              "name": "Time",
              "ofType": null
            }
          },
          {
            "name": "gte",
            "type": {
              "kind": "SCALAR",
              "name": "Time",
              "ofType": null
            }
          },
          {
            "name": "in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Time",
                "ofType": null
              }
            }
          },
          {
            "name": "lt",
            "type": {
              "kind": "SCALAR",
              "name": "Time",
              "ofType": null
            }
          },
          {
            "name": "lte",
            "type": {
              "kind": "SCALAR",
              "name": "Time",
              "ofType": null
            }
          },
          {
            "name": "ne",
            "type": {
              "kind": "SCALAR",
              "name": "Time",
              "ofType": null
            }
          },
          {
            "name": "nei",
            "type": {
              "kind": "SCALAR",
              "name": "Time",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TimeFilterInput",
              "ofType": null
            }
          },
          {
            "name": "notContains",
            "type": {
              "kind": "SCALAR",
              "name": "Time",
              "ofType": null
            }
          },
          {
            "name": "notContainsi",
            "type": {
              "kind": "SCALAR",
              "name": "Time",
              "ofType": null
            }
          },
          {
            "name": "notIn",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Time",
                "ofType": null
              }
            }
          },
          {
            "name": "notNull",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "null",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "or",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Time",
                "ofType": null
              }
            }
          },
          {
            "name": "startsWith",
            "type": {
              "kind": "SCALAR",
              "name": "Time",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Todo",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "publishedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "TodoEntity",
        "fields": [
          {
            "name": "attributes",
            "type": {
              "kind": "OBJECT",
              "name": "Todo",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "TodoEntityResponse",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "OBJECT",
              "name": "TodoEntity",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "TodoEntityResponseCollection",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "TodoEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "meta",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ResponseCollectionMeta",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "TodoFiltersInput",
        "inputFields": [
          {
            "name": "and",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "TodoFiltersInput",
                "ofType": null
              }
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilterInput",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilterInput",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IDFilterInput",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "TodoFiltersInput",
              "ofType": null
            }
          },
          {
            "name": "or",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "TodoFiltersInput",
                "ofType": null
              }
            }
          },
          {
            "name": "publishedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilterInput",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilterInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "TodoInput",
        "inputFields": [
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "publishedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "TodoRelationResponseCollection",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "TodoEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "Upload"
      },
      {
        "kind": "OBJECT",
        "name": "UploadFile",
        "fields": [
          {
            "name": "alternativeText",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "caption",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "ext",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "formats",
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "hash",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "height",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "mime",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "previewUrl",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "provider",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "provider_metadata",
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "related",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "UNION",
                "name": "GenericMorph",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "size",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "url",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "width",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UploadFileEntity",
        "fields": [
          {
            "name": "attributes",
            "type": {
              "kind": "OBJECT",
              "name": "UploadFile",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UploadFileEntityResponse",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "OBJECT",
              "name": "UploadFileEntity",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UploadFileEntityResponseCollection",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UploadFileEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "meta",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ResponseCollectionMeta",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UploadFileFiltersInput",
        "inputFields": [
          {
            "name": "alternativeText",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilterInput",
              "ofType": null
            }
          },
          {
            "name": "and",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "UploadFileFiltersInput",
                "ofType": null
              }
            }
          },
          {
            "name": "caption",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilterInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilterInput",
              "ofType": null
            }
          },
          {
            "name": "ext",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilterInput",
              "ofType": null
            }
          },
          {
            "name": "folder",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UploadFolderFiltersInput",
              "ofType": null
            }
          },
          {
            "name": "folderPath",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilterInput",
              "ofType": null
            }
          },
          {
            "name": "formats",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "JSONFilterInput",
              "ofType": null
            }
          },
          {
            "name": "hash",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilterInput",
              "ofType": null
            }
          },
          {
            "name": "height",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IntFilterInput",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IDFilterInput",
              "ofType": null
            }
          },
          {
            "name": "mime",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilterInput",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilterInput",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UploadFileFiltersInput",
              "ofType": null
            }
          },
          {
            "name": "or",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "UploadFileFiltersInput",
                "ofType": null
              }
            }
          },
          {
            "name": "previewUrl",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilterInput",
              "ofType": null
            }
          },
          {
            "name": "provider",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilterInput",
              "ofType": null
            }
          },
          {
            "name": "provider_metadata",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "JSONFilterInput",
              "ofType": null
            }
          },
          {
            "name": "size",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "FloatFilterInput",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilterInput",
              "ofType": null
            }
          },
          {
            "name": "url",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilterInput",
              "ofType": null
            }
          },
          {
            "name": "width",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IntFilterInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UploadFileInput",
        "inputFields": [
          {
            "name": "alternativeText",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "caption",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "ext",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "folder",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          },
          {
            "name": "folderPath",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "formats",
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            }
          },
          {
            "name": "hash",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "height",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "mime",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "previewUrl",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "provider",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "provider_metadata",
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            }
          },
          {
            "name": "size",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            }
          },
          {
            "name": "url",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "width",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "UploadFileRelationResponseCollection",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UploadFileEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UploadFolder",
        "fields": [
          {
            "name": "children",
            "type": {
              "kind": "OBJECT",
              "name": "UploadFolderRelationResponseCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "filters",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "UploadFolderFiltersInput",
                  "ofType": null
                }
              },
              {
                "name": "pagination",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "PaginationArg",
                  "ofType": null
                }
              },
              {
                "name": "sort",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "files",
            "type": {
              "kind": "OBJECT",
              "name": "UploadFileRelationResponseCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "filters",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "UploadFileFiltersInput",
                  "ofType": null
                }
              },
              {
                "name": "pagination",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "PaginationArg",
                  "ofType": null
                }
              },
              {
                "name": "sort",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "parent",
            "type": {
              "kind": "OBJECT",
              "name": "UploadFolderEntityResponse",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "path",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "pathId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UploadFolderEntity",
        "fields": [
          {
            "name": "attributes",
            "type": {
              "kind": "OBJECT",
              "name": "UploadFolder",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UploadFolderEntityResponse",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "OBJECT",
              "name": "UploadFolderEntity",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UploadFolderEntityResponseCollection",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UploadFolderEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "meta",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ResponseCollectionMeta",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UploadFolderFiltersInput",
        "inputFields": [
          {
            "name": "and",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "UploadFolderFiltersInput",
                "ofType": null
              }
            }
          },
          {
            "name": "children",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UploadFolderFiltersInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilterInput",
              "ofType": null
            }
          },
          {
            "name": "files",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UploadFileFiltersInput",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IDFilterInput",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilterInput",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UploadFolderFiltersInput",
              "ofType": null
            }
          },
          {
            "name": "or",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "UploadFolderFiltersInput",
                "ofType": null
              }
            }
          },
          {
            "name": "parent",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UploadFolderFiltersInput",
              "ofType": null
            }
          },
          {
            "name": "path",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilterInput",
              "ofType": null
            }
          },
          {
            "name": "pathId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IntFilterInput",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilterInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UploadFolderInput",
        "inputFields": [
          {
            "name": "children",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "name": "files",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "parent",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          },
          {
            "name": "path",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "pathId",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "UploadFolderRelationResponseCollection",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UploadFolderEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UsersPermissionsCreateRolePayload",
        "fields": [
          {
            "name": "ok",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UsersPermissionsDeleteRolePayload",
        "fields": [
          {
            "name": "ok",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UsersPermissionsLoginInput",
        "inputFields": [
          {
            "name": "identifier",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "password",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "provider",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": "\"local\""
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "UsersPermissionsLoginPayload",
        "fields": [
          {
            "name": "jwt",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "user",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UsersPermissionsMe",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UsersPermissionsMe",
        "fields": [
          {
            "name": "blocked",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "confirmed",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "email",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "role",
            "type": {
              "kind": "OBJECT",
              "name": "UsersPermissionsMeRole",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "username",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UsersPermissionsMeRole",
        "fields": [
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "type",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UsersPermissionsPasswordPayload",
        "fields": [
          {
            "name": "ok",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UsersPermissionsPermission",
        "fields": [
          {
            "name": "action",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "role",
            "type": {
              "kind": "OBJECT",
              "name": "UsersPermissionsRoleEntityResponse",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UsersPermissionsPermissionEntity",
        "fields": [
          {
            "name": "attributes",
            "type": {
              "kind": "OBJECT",
              "name": "UsersPermissionsPermission",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UsersPermissionsPermissionEntityResponse",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "OBJECT",
              "name": "UsersPermissionsPermissionEntity",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UsersPermissionsPermissionEntityResponseCollection",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UsersPermissionsPermissionEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "meta",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ResponseCollectionMeta",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UsersPermissionsPermissionFiltersInput",
        "inputFields": [
          {
            "name": "action",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilterInput",
              "ofType": null
            }
          },
          {
            "name": "and",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "UsersPermissionsPermissionFiltersInput",
                "ofType": null
              }
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilterInput",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IDFilterInput",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UsersPermissionsPermissionFiltersInput",
              "ofType": null
            }
          },
          {
            "name": "or",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "UsersPermissionsPermissionFiltersInput",
                "ofType": null
              }
            }
          },
          {
            "name": "role",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UsersPermissionsRoleFiltersInput",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilterInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UsersPermissionsPermissionInput",
        "inputFields": [
          {
            "name": "action",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "role",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "UsersPermissionsPermissionRelationResponseCollection",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UsersPermissionsPermissionEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UsersPermissionsRegisterInput",
        "inputFields": [
          {
            "name": "email",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "password",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "username",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "UsersPermissionsRole",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "permissions",
            "type": {
              "kind": "OBJECT",
              "name": "UsersPermissionsPermissionRelationResponseCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "filters",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "UsersPermissionsPermissionFiltersInput",
                  "ofType": null
                }
              },
              {
                "name": "pagination",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "PaginationArg",
                  "ofType": null
                }
              },
              {
                "name": "sort",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "type",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "users",
            "type": {
              "kind": "OBJECT",
              "name": "UsersPermissionsUserRelationResponseCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "filters",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "UsersPermissionsUserFiltersInput",
                  "ofType": null
                }
              },
              {
                "name": "pagination",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "PaginationArg",
                  "ofType": null
                }
              },
              {
                "name": "sort",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UsersPermissionsRoleEntity",
        "fields": [
          {
            "name": "attributes",
            "type": {
              "kind": "OBJECT",
              "name": "UsersPermissionsRole",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UsersPermissionsRoleEntityResponse",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "OBJECT",
              "name": "UsersPermissionsRoleEntity",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UsersPermissionsRoleEntityResponseCollection",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UsersPermissionsRoleEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "meta",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ResponseCollectionMeta",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UsersPermissionsRoleFiltersInput",
        "inputFields": [
          {
            "name": "and",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "UsersPermissionsRoleFiltersInput",
                "ofType": null
              }
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilterInput",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilterInput",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IDFilterInput",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilterInput",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UsersPermissionsRoleFiltersInput",
              "ofType": null
            }
          },
          {
            "name": "or",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "UsersPermissionsRoleFiltersInput",
                "ofType": null
              }
            }
          },
          {
            "name": "permissions",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UsersPermissionsPermissionFiltersInput",
              "ofType": null
            }
          },
          {
            "name": "type",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilterInput",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilterInput",
              "ofType": null
            }
          },
          {
            "name": "users",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UsersPermissionsUserFiltersInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UsersPermissionsRoleInput",
        "inputFields": [
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "permissions",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "name": "type",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "users",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "UsersPermissionsRoleRelationResponseCollection",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UsersPermissionsRoleEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UsersPermissionsUpdateRolePayload",
        "fields": [
          {
            "name": "ok",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UsersPermissionsUser",
        "fields": [
          {
            "name": "blocked",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "confirmed",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "email",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "provider",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "role",
            "type": {
              "kind": "OBJECT",
              "name": "UsersPermissionsRoleEntityResponse",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "username",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UsersPermissionsUserEntity",
        "fields": [
          {
            "name": "attributes",
            "type": {
              "kind": "OBJECT",
              "name": "UsersPermissionsUser",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UsersPermissionsUserEntityResponse",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "OBJECT",
              "name": "UsersPermissionsUserEntity",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UsersPermissionsUserEntityResponseCollection",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UsersPermissionsUserEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "meta",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ResponseCollectionMeta",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UsersPermissionsUserFiltersInput",
        "inputFields": [
          {
            "name": "and",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "UsersPermissionsUserFiltersInput",
                "ofType": null
              }
            }
          },
          {
            "name": "blocked",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "BooleanFilterInput",
              "ofType": null
            }
          },
          {
            "name": "confirmationToken",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilterInput",
              "ofType": null
            }
          },
          {
            "name": "confirmed",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "BooleanFilterInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilterInput",
              "ofType": null
            }
          },
          {
            "name": "email",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilterInput",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IDFilterInput",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UsersPermissionsUserFiltersInput",
              "ofType": null
            }
          },
          {
            "name": "or",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "UsersPermissionsUserFiltersInput",
                "ofType": null
              }
            }
          },
          {
            "name": "password",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilterInput",
              "ofType": null
            }
          },
          {
            "name": "provider",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilterInput",
              "ofType": null
            }
          },
          {
            "name": "resetPasswordToken",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilterInput",
              "ofType": null
            }
          },
          {
            "name": "role",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UsersPermissionsRoleFiltersInput",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilterInput",
              "ofType": null
            }
          },
          {
            "name": "username",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilterInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UsersPermissionsUserInput",
        "inputFields": [
          {
            "name": "blocked",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "confirmationToken",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "confirmed",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "email",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "password",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "provider",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "resetPasswordToken",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "role",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          },
          {
            "name": "username",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "UsersPermissionsUserRelationResponseCollection",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UsersPermissionsUserEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      }
    ],
    "directives": []
  }
};

import * as gqlTada from 'gql.tada';

declare module 'gql.tada' {
  interface setupSchema {
    introspection: introspection
  }
}