/**
 * @fileoverview gRPC-Web generated client stub for localization
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v4.25.1
// source: admin.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as admin_pb from './admin_pb'; // proto import: "admin.proto"


export class LocalizationAdminClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorAddLabel = new grpcWeb.MethodDescriptor(
    '/localization.LocalizationAdmin/AddLabel',
    grpcWeb.MethodType.UNARY,
    admin_pb.AddLabelRequest,
    admin_pb.AddLabelResponse,
    (request: admin_pb.AddLabelRequest) => {
      return request.serializeBinary();
    },
    admin_pb.AddLabelResponse.deserializeBinary
  );

  addLabel(
    request: admin_pb.AddLabelRequest,
    metadata?: grpcWeb.Metadata | null): Promise<admin_pb.AddLabelResponse>;

  addLabel(
    request: admin_pb.AddLabelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: admin_pb.AddLabelResponse) => void): grpcWeb.ClientReadableStream<admin_pb.AddLabelResponse>;

  addLabel(
    request: admin_pb.AddLabelRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: admin_pb.AddLabelResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/localization.LocalizationAdmin/AddLabel',
        request,
        metadata || {},
        this.methodDescriptorAddLabel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/localization.LocalizationAdmin/AddLabel',
    request,
    metadata || {},
    this.methodDescriptorAddLabel);
  }

  methodDescriptorAddLanguage = new grpcWeb.MethodDescriptor(
    '/localization.LocalizationAdmin/AddLanguage',
    grpcWeb.MethodType.UNARY,
    admin_pb.AddLanguageRequest,
    admin_pb.AddLanguageResponse,
    (request: admin_pb.AddLanguageRequest) => {
      return request.serializeBinary();
    },
    admin_pb.AddLanguageResponse.deserializeBinary
  );

  addLanguage(
    request: admin_pb.AddLanguageRequest,
    metadata?: grpcWeb.Metadata | null): Promise<admin_pb.AddLanguageResponse>;

  addLanguage(
    request: admin_pb.AddLanguageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: admin_pb.AddLanguageResponse) => void): grpcWeb.ClientReadableStream<admin_pb.AddLanguageResponse>;

  addLanguage(
    request: admin_pb.AddLanguageRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: admin_pb.AddLanguageResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/localization.LocalizationAdmin/AddLanguage',
        request,
        metadata || {},
        this.methodDescriptorAddLanguage,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/localization.LocalizationAdmin/AddLanguage',
    request,
    metadata || {},
    this.methodDescriptorAddLanguage);
  }

}

