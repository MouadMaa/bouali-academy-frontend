/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "fragment Category on Category {\n  name\n}": types.CategoryFragmentDoc,
    "query Categories {\n  categories {\n    data {\n      id\n      attributes {\n        ...Category\n      }\n    }\n  }\n}": types.CategoriesDocument,
};

export function graphql(source: "fragment Category on Category {\n  name\n}"): (typeof documents)["fragment Category on Category {\n  name\n}"];
export function graphql(source: "query Categories {\n  categories {\n    data {\n      id\n      attributes {\n        ...Category\n      }\n    }\n  }\n}"): (typeof documents)["query Categories {\n  categories {\n    data {\n      id\n      attributes {\n        ...Category\n      }\n    }\n  }\n}"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;