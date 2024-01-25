/**
 * @fileoverview gRPC-Web generated client stub for localization
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v4.25.1
// source: labelLocalization.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as labelLocalization_pb from './labelLocalization_pb'; // proto import: "labelLocalization.proto"


export class LabelLocalizationClient {
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

  methodDescriptorGetAllLabelsByISOCode = new grpcWeb.MethodDescriptor(
    '/localization.LabelLocalization/GetAllLabelsByISOCode',
    grpcWeb.MethodType.UNARY,
    labelLocalization_pb.GetAllLabelsByISOCodeRequest,
    labelLocalization_pb.LocalizedLabelsResponse,
    (request: labelLocalization_pb.GetAllLabelsByISOCodeRequest) => {
      return request.serializeBinary();
    },
    labelLocalization_pb.LocalizedLabelsResponse.deserializeBinary
  );

  getAllLabelsByISOCode(
    request: labelLocalization_pb.GetAllLabelsByISOCodeRequest,
    metadata?: grpcWeb.Metadata | null): Promise<labelLocalization_pb.LocalizedLabelsResponse>;

  getAllLabelsByISOCode(
    request: labelLocalization_pb.GetAllLabelsByISOCodeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: labelLocalization_pb.LocalizedLabelsResponse) => void): grpcWeb.ClientReadableStream<labelLocalization_pb.LocalizedLabelsResponse>;

  getAllLabelsByISOCode(
    request: labelLocalization_pb.GetAllLabelsByISOCodeRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: labelLocalization_pb.LocalizedLabelsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/localization.LabelLocalization/GetAllLabelsByISOCode',
        request,
        metadata || {},
        this.methodDescriptorGetAllLabelsByISOCode,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/localization.LabelLocalization/GetAllLabelsByISOCode',
    request,
    metadata || {},
    this.methodDescriptorGetAllLabelsByISOCode);
  }

  methodDescriptorGetLabel = new grpcWeb.MethodDescriptor(
    '/localization.LabelLocalization/GetLabel',
    grpcWeb.MethodType.UNARY,
    labelLocalization_pb.GetLabelRequest,
    labelLocalization_pb.LocalizedLabel,
    (request: labelLocalization_pb.GetLabelRequest) => {
      return request.serializeBinary();
    },
    labelLocalization_pb.LocalizedLabel.deserializeBinary
  );

  getLabel(
    request: labelLocalization_pb.GetLabelRequest,
    metadata?: grpcWeb.Metadata | null): Promise<labelLocalization_pb.LocalizedLabel>;

  getLabel(
    request: labelLocalization_pb.GetLabelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: labelLocalization_pb.LocalizedLabel) => void): grpcWeb.ClientReadableStream<labelLocalization_pb.LocalizedLabel>;

  getLabel(
    request: labelLocalization_pb.GetLabelRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: labelLocalization_pb.LocalizedLabel) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/localization.LabelLocalization/GetLabel',
        request,
        metadata || {},
        this.methodDescriptorGetLabel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/localization.LabelLocalization/GetLabel',
    request,
    metadata || {},
    this.methodDescriptorGetLabel);
  }

  methodDescriptorGetCurrentVersion = new grpcWeb.MethodDescriptor(
    '/localization.LabelLocalization/GetCurrentVersion',
    grpcWeb.MethodType.UNARY,
    labelLocalization_pb.GetCurrentVersionRequest,
    labelLocalization_pb.GetCurrentVersionResponse,
    (request: labelLocalization_pb.GetCurrentVersionRequest) => {
      return request.serializeBinary();
    },
    labelLocalization_pb.GetCurrentVersionResponse.deserializeBinary
  );

  getCurrentVersion(
    request: labelLocalization_pb.GetCurrentVersionRequest,
    metadata?: grpcWeb.Metadata | null): Promise<labelLocalization_pb.GetCurrentVersionResponse>;

  getCurrentVersion(
    request: labelLocalization_pb.GetCurrentVersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: labelLocalization_pb.GetCurrentVersionResponse) => void): grpcWeb.ClientReadableStream<labelLocalization_pb.GetCurrentVersionResponse>;

  getCurrentVersion(
    request: labelLocalization_pb.GetCurrentVersionRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: labelLocalization_pb.GetCurrentVersionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/localization.LabelLocalization/GetCurrentVersion',
        request,
        metadata || {},
        this.methodDescriptorGetCurrentVersion,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/localization.LabelLocalization/GetCurrentVersion',
    request,
    metadata || {},
    this.methodDescriptorGetCurrentVersion);
  }

  methodDescriptorGetAllLanguages = new grpcWeb.MethodDescriptor(
    '/localization.LabelLocalization/GetAllLanguages',
    grpcWeb.MethodType.UNARY,
    labelLocalization_pb.GetAllLanguagesRequest,
    labelLocalization_pb.GetAllLanguagesResponse,
    (request: labelLocalization_pb.GetAllLanguagesRequest) => {
      return request.serializeBinary();
    },
    labelLocalization_pb.GetAllLanguagesResponse.deserializeBinary
  );

  getAllLanguages(
    request: labelLocalization_pb.GetAllLanguagesRequest,
    metadata?: grpcWeb.Metadata | null): Promise<labelLocalization_pb.GetAllLanguagesResponse>;

  getAllLanguages(
    request: labelLocalization_pb.GetAllLanguagesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: labelLocalization_pb.GetAllLanguagesResponse) => void): grpcWeb.ClientReadableStream<labelLocalization_pb.GetAllLanguagesResponse>;

  getAllLanguages(
    request: labelLocalization_pb.GetAllLanguagesRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: labelLocalization_pb.GetAllLanguagesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/localization.LabelLocalization/GetAllLanguages',
        request,
        metadata || {},
        this.methodDescriptorGetAllLanguages,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/localization.LabelLocalization/GetAllLanguages',
    request,
    metadata || {},
    this.methodDescriptorGetAllLanguages);
  }

}

