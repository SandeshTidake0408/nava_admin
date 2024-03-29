/**
 * @fileoverview gRPC-Web generated client stub for login
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v4.25.1
// source: profile.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as profile_pb from './profile_pb'; // proto import: "profile.proto"
import * as common_pb from './common_pb'; // proto import: "common.proto"


export class ProfileClient {
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

  methodDescriptorcreateOrUpdateProfile = new grpcWeb.MethodDescriptor(
    '/login.Profile/createOrUpdateProfile',
    grpcWeb.MethodType.UNARY,
    profile_pb.CreateProfileRequest,
    common_pb.UserProfileProto,
    (request: profile_pb.CreateProfileRequest) => {
      return request.serializeBinary();
    },
    common_pb.UserProfileProto.deserializeBinary
  );

  createOrUpdateProfile(
    request: profile_pb.CreateProfileRequest,
    metadata?: grpcWeb.Metadata | null): Promise<common_pb.UserProfileProto>;

  createOrUpdateProfile(
    request: profile_pb.CreateProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: common_pb.UserProfileProto) => void): grpcWeb.ClientReadableStream<common_pb.UserProfileProto>;

  createOrUpdateProfile(
    request: profile_pb.CreateProfileRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: common_pb.UserProfileProto) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/login.Profile/createOrUpdateProfile',
        request,
        metadata || {},
        this.methodDescriptorcreateOrUpdateProfile,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/login.Profile/createOrUpdateProfile',
    request,
    metadata || {},
    this.methodDescriptorcreateOrUpdateProfile);
  }

  methodDescriptorgetProfileById = new grpcWeb.MethodDescriptor(
    '/login.Profile/getProfileById',
    grpcWeb.MethodType.UNARY,
    profile_pb.IdRequest,
    common_pb.UserProfileProto,
    (request: profile_pb.IdRequest) => {
      return request.serializeBinary();
    },
    common_pb.UserProfileProto.deserializeBinary
  );

  getProfileById(
    request: profile_pb.IdRequest,
    metadata?: grpcWeb.Metadata | null): Promise<common_pb.UserProfileProto>;

  getProfileById(
    request: profile_pb.IdRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: common_pb.UserProfileProto) => void): grpcWeb.ClientReadableStream<common_pb.UserProfileProto>;

  getProfileById(
    request: profile_pb.IdRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: common_pb.UserProfileProto) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/login.Profile/getProfileById',
        request,
        metadata || {},
        this.methodDescriptorgetProfileById,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/login.Profile/getProfileById',
    request,
    metadata || {},
    this.methodDescriptorgetProfileById);
  }

  methodDescriptorbulkGetProfileByIds = new grpcWeb.MethodDescriptor(
    '/login.Profile/bulkGetProfileByIds',
    grpcWeb.MethodType.UNARY,
    profile_pb.BulkGetProfileRequest,
    profile_pb.ProfileListResponse,
    (request: profile_pb.BulkGetProfileRequest) => {
      return request.serializeBinary();
    },
    profile_pb.ProfileListResponse.deserializeBinary
  );

  bulkGetProfileByIds(
    request: profile_pb.BulkGetProfileRequest,
    metadata?: grpcWeb.Metadata | null): Promise<profile_pb.ProfileListResponse>;

  bulkGetProfileByIds(
    request: profile_pb.BulkGetProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: profile_pb.ProfileListResponse) => void): grpcWeb.ClientReadableStream<profile_pb.ProfileListResponse>;

  bulkGetProfileByIds(
    request: profile_pb.BulkGetProfileRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: profile_pb.ProfileListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/login.Profile/bulkGetProfileByIds',
        request,
        metadata || {},
        this.methodDescriptorbulkGetProfileByIds,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/login.Profile/bulkGetProfileByIds',
    request,
    metadata || {},
    this.methodDescriptorbulkGetProfileByIds);
  }

  methodDescriptorgetProfileImageUploadUrl = new grpcWeb.MethodDescriptor(
    '/login.Profile/getProfileImageUploadUrl',
    grpcWeb.MethodType.UNARY,
    profile_pb.ProfileImageUploadRequest,
    profile_pb.ProfileImageUploadURL,
    (request: profile_pb.ProfileImageUploadRequest) => {
      return request.serializeBinary();
    },
    profile_pb.ProfileImageUploadURL.deserializeBinary
  );

  getProfileImageUploadUrl(
    request: profile_pb.ProfileImageUploadRequest,
    metadata?: grpcWeb.Metadata | null): Promise<profile_pb.ProfileImageUploadURL>;

  getProfileImageUploadUrl(
    request: profile_pb.ProfileImageUploadRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: profile_pb.ProfileImageUploadURL) => void): grpcWeb.ClientReadableStream<profile_pb.ProfileImageUploadURL>;

  getProfileImageUploadUrl(
    request: profile_pb.ProfileImageUploadRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: profile_pb.ProfileImageUploadURL) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/login.Profile/getProfileImageUploadUrl',
        request,
        metadata || {},
        this.methodDescriptorgetProfileImageUploadUrl,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/login.Profile/getProfileImageUploadUrl',
    request,
    metadata || {},
    this.methodDescriptorgetProfileImageUploadUrl);
  }

  methodDescriptorgetProfilesByAttribute = new grpcWeb.MethodDescriptor(
    '/login.Profile/getProfilesByAttribute',
    grpcWeb.MethodType.UNARY,
    profile_pb.AttributeRequest,
    profile_pb.AttributeResponse,
    (request: profile_pb.AttributeRequest) => {
      return request.serializeBinary();
    },
    profile_pb.AttributeResponse.deserializeBinary
  );

  getProfilesByAttribute(
    request: profile_pb.AttributeRequest,
    metadata?: grpcWeb.Metadata | null): Promise<profile_pb.AttributeResponse>;

  getProfilesByAttribute(
    request: profile_pb.AttributeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: profile_pb.AttributeResponse) => void): grpcWeb.ClientReadableStream<profile_pb.AttributeResponse>;

  getProfilesByAttribute(
    request: profile_pb.AttributeRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: profile_pb.AttributeResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/login.Profile/getProfilesByAttribute',
        request,
        metadata || {},
        this.methodDescriptorgetProfilesByAttribute,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/login.Profile/getProfilesByAttribute',
    request,
    metadata || {},
    this.methodDescriptorgetProfilesByAttribute);
  }

  methodDescriptorgetProfileByPhoneOrEmail = new grpcWeb.MethodDescriptor(
    '/login.Profile/getProfileByPhoneOrEmail',
    grpcWeb.MethodType.UNARY,
    profile_pb.GetProfileByPhoneOrEmailRequest,
    common_pb.UserProfileProto,
    (request: profile_pb.GetProfileByPhoneOrEmailRequest) => {
      return request.serializeBinary();
    },
    common_pb.UserProfileProto.deserializeBinary
  );

  getProfileByPhoneOrEmail(
    request: profile_pb.GetProfileByPhoneOrEmailRequest,
    metadata?: grpcWeb.Metadata | null): Promise<common_pb.UserProfileProto>;

  getProfileByPhoneOrEmail(
    request: profile_pb.GetProfileByPhoneOrEmailRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: common_pb.UserProfileProto) => void): grpcWeb.ClientReadableStream<common_pb.UserProfileProto>;

  getProfileByPhoneOrEmail(
    request: profile_pb.GetProfileByPhoneOrEmailRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: common_pb.UserProfileProto) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/login.Profile/getProfileByPhoneOrEmail',
        request,
        metadata || {},
        this.methodDescriptorgetProfileByPhoneOrEmail,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/login.Profile/getProfileByPhoneOrEmail',
    request,
    metadata || {},
    this.methodDescriptorgetProfileByPhoneOrEmail);
  }

  methodDescriptorisUserAdmin = new grpcWeb.MethodDescriptor(
    '/login.Profile/isUserAdmin',
    grpcWeb.MethodType.UNARY,
    profile_pb.IdRequest,
    profile_pb.IsUserAdminResponse,
    (request: profile_pb.IdRequest) => {
      return request.serializeBinary();
    },
    profile_pb.IsUserAdminResponse.deserializeBinary
  );

  isUserAdmin(
    request: profile_pb.IdRequest,
    metadata?: grpcWeb.Metadata | null): Promise<profile_pb.IsUserAdminResponse>;

  isUserAdmin(
    request: profile_pb.IdRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: profile_pb.IsUserAdminResponse) => void): grpcWeb.ClientReadableStream<profile_pb.IsUserAdminResponse>;

  isUserAdmin(
    request: profile_pb.IdRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: profile_pb.IsUserAdminResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/login.Profile/isUserAdmin',
        request,
        metadata || {},
        this.methodDescriptorisUserAdmin,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/login.Profile/isUserAdmin',
    request,
    metadata || {},
    this.methodDescriptorisUserAdmin);
  }

  methodDescriptorFetchProfiles = new grpcWeb.MethodDescriptor(
    '/login.Profile/FetchProfiles',
    grpcWeb.MethodType.UNARY,
    profile_pb.FetchProfilesRequest,
    profile_pb.ProfileListResponse,
    (request: profile_pb.FetchProfilesRequest) => {
      return request.serializeBinary();
    },
    profile_pb.ProfileListResponse.deserializeBinary
  );

  fetchProfiles(
    request: profile_pb.FetchProfilesRequest,
    metadata?: grpcWeb.Metadata | null): Promise<profile_pb.ProfileListResponse>;

  fetchProfiles(
    request: profile_pb.FetchProfilesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: profile_pb.ProfileListResponse) => void): grpcWeb.ClientReadableStream<profile_pb.ProfileListResponse>;

  fetchProfiles(
    request: profile_pb.FetchProfilesRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: profile_pb.ProfileListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/login.Profile/FetchProfiles',
        request,
        metadata || {},
        this.methodDescriptorFetchProfiles,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/login.Profile/FetchProfiles',
    request,
    metadata || {},
    this.methodDescriptorFetchProfiles);
  }

}

