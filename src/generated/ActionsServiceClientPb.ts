/**
 * @fileoverview gRPC-Web generated client stub for social
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v4.25.1
// source: actions.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as actions_pb from './actions_pb'; // proto import: "actions.proto"
import * as commons_pb from './commons_pb'; // proto import: "commons.proto"


export class actionsClient {
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

  methodDescriptorReact = new grpcWeb.MethodDescriptor(
    '/social.actions/React',
    grpcWeb.MethodType.UNARY,
    actions_pb.ReactRequest,
    commons_pb.SocialStatusResponse,
    (request: actions_pb.ReactRequest) => {
      return request.serializeBinary();
    },
    commons_pb.SocialStatusResponse.deserializeBinary
  );

  react(
    request: actions_pb.ReactRequest,
    metadata?: grpcWeb.Metadata | null): Promise<commons_pb.SocialStatusResponse>;

  react(
    request: actions_pb.ReactRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: commons_pb.SocialStatusResponse) => void): grpcWeb.ClientReadableStream<commons_pb.SocialStatusResponse>;

  react(
    request: actions_pb.ReactRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: commons_pb.SocialStatusResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/social.actions/React',
        request,
        metadata || {},
        this.methodDescriptorReact,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/social.actions/React',
    request,
    metadata || {},
    this.methodDescriptorReact);
  }

  methodDescriptorUnReact = new grpcWeb.MethodDescriptor(
    '/social.actions/UnReact',
    grpcWeb.MethodType.UNARY,
    actions_pb.ReactRequest,
    commons_pb.SocialStatusResponse,
    (request: actions_pb.ReactRequest) => {
      return request.serializeBinary();
    },
    commons_pb.SocialStatusResponse.deserializeBinary
  );

  unReact(
    request: actions_pb.ReactRequest,
    metadata?: grpcWeb.Metadata | null): Promise<commons_pb.SocialStatusResponse>;

  unReact(
    request: actions_pb.ReactRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: commons_pb.SocialStatusResponse) => void): grpcWeb.ClientReadableStream<commons_pb.SocialStatusResponse>;

  unReact(
    request: actions_pb.ReactRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: commons_pb.SocialStatusResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/social.actions/UnReact',
        request,
        metadata || {},
        this.methodDescriptorUnReact,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/social.actions/UnReact',
    request,
    metadata || {},
    this.methodDescriptorUnReact);
  }

  methodDescriptorBookmark = new grpcWeb.MethodDescriptor(
    '/social.actions/Bookmark',
    grpcWeb.MethodType.UNARY,
    actions_pb.IdRequest,
    commons_pb.SocialStatusResponse,
    (request: actions_pb.IdRequest) => {
      return request.serializeBinary();
    },
    commons_pb.SocialStatusResponse.deserializeBinary
  );

  bookmark(
    request: actions_pb.IdRequest,
    metadata?: grpcWeb.Metadata | null): Promise<commons_pb.SocialStatusResponse>;

  bookmark(
    request: actions_pb.IdRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: commons_pb.SocialStatusResponse) => void): grpcWeb.ClientReadableStream<commons_pb.SocialStatusResponse>;

  bookmark(
    request: actions_pb.IdRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: commons_pb.SocialStatusResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/social.actions/Bookmark',
        request,
        metadata || {},
        this.methodDescriptorBookmark,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/social.actions/Bookmark',
    request,
    metadata || {},
    this.methodDescriptorBookmark);
  }

  methodDescriptorComment = new grpcWeb.MethodDescriptor(
    '/social.actions/Comment',
    grpcWeb.MethodType.UNARY,
    actions_pb.CommentRequest,
    actions_pb.CommentProto,
    (request: actions_pb.CommentRequest) => {
      return request.serializeBinary();
    },
    actions_pb.CommentProto.deserializeBinary
  );

  comment(
    request: actions_pb.CommentRequest,
    metadata?: grpcWeb.Metadata | null): Promise<actions_pb.CommentProto>;

  comment(
    request: actions_pb.CommentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: actions_pb.CommentProto) => void): grpcWeb.ClientReadableStream<actions_pb.CommentProto>;

  comment(
    request: actions_pb.CommentRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: actions_pb.CommentProto) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/social.actions/Comment',
        request,
        metadata || {},
        this.methodDescriptorComment,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/social.actions/Comment',
    request,
    metadata || {},
    this.methodDescriptorComment);
  }

  methodDescriptorDeleteComment = new grpcWeb.MethodDescriptor(
    '/social.actions/DeleteComment',
    grpcWeb.MethodType.UNARY,
    actions_pb.IdRequest,
    commons_pb.SocialStatusResponse,
    (request: actions_pb.IdRequest) => {
      return request.serializeBinary();
    },
    commons_pb.SocialStatusResponse.deserializeBinary
  );

  deleteComment(
    request: actions_pb.IdRequest,
    metadata?: grpcWeb.Metadata | null): Promise<commons_pb.SocialStatusResponse>;

  deleteComment(
    request: actions_pb.IdRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: commons_pb.SocialStatusResponse) => void): grpcWeb.ClientReadableStream<commons_pb.SocialStatusResponse>;

  deleteComment(
    request: actions_pb.IdRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: commons_pb.SocialStatusResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/social.actions/DeleteComment',
        request,
        metadata || {},
        this.methodDescriptorDeleteComment,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/social.actions/DeleteComment',
    request,
    metadata || {},
    this.methodDescriptorDeleteComment);
  }

  methodDescriptorFetchComments = new grpcWeb.MethodDescriptor(
    '/social.actions/FetchComments',
    grpcWeb.MethodType.UNARY,
    actions_pb.CommentFetchRequest,
    actions_pb.CommentsFetchResponse,
    (request: actions_pb.CommentFetchRequest) => {
      return request.serializeBinary();
    },
    actions_pb.CommentsFetchResponse.deserializeBinary
  );

  fetchComments(
    request: actions_pb.CommentFetchRequest,
    metadata?: grpcWeb.Metadata | null): Promise<actions_pb.CommentsFetchResponse>;

  fetchComments(
    request: actions_pb.CommentFetchRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: actions_pb.CommentsFetchResponse) => void): grpcWeb.ClientReadableStream<actions_pb.CommentsFetchResponse>;

  fetchComments(
    request: actions_pb.CommentFetchRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: actions_pb.CommentsFetchResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/social.actions/FetchComments',
        request,
        metadata || {},
        this.methodDescriptorFetchComments,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/social.actions/FetchComments',
    request,
    metadata || {},
    this.methodDescriptorFetchComments);
  }

  methodDescriptorFetchCommentById = new grpcWeb.MethodDescriptor(
    '/social.actions/FetchCommentById',
    grpcWeb.MethodType.UNARY,
    actions_pb.IdRequest,
    actions_pb.CommentProto,
    (request: actions_pb.IdRequest) => {
      return request.serializeBinary();
    },
    actions_pb.CommentProto.deserializeBinary
  );

  fetchCommentById(
    request: actions_pb.IdRequest,
    metadata?: grpcWeb.Metadata | null): Promise<actions_pb.CommentProto>;

  fetchCommentById(
    request: actions_pb.IdRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: actions_pb.CommentProto) => void): grpcWeb.ClientReadableStream<actions_pb.CommentProto>;

  fetchCommentById(
    request: actions_pb.IdRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: actions_pb.CommentProto) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/social.actions/FetchCommentById',
        request,
        metadata || {},
        this.methodDescriptorFetchCommentById,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/social.actions/FetchCommentById',
    request,
    metadata || {},
    this.methodDescriptorFetchCommentById);
  }

}

