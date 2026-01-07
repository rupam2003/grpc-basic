// Original file: proto/user.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { User as _userservice_User, User__Output as _userservice_User__Output } from '../userservice/User';
import type { UserId as _userservice_UserId, UserId__Output as _userservice_UserId__Output } from '../userservice/UserId';

export interface UserServiceClient extends grpc.Client {
  CreateUser(argument: _userservice_User, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_userservice_User__Output>;
  CreateUser(argument: _userservice_User, options?: grpc.CallOptions): grpc.ClientReadableStream<_userservice_User__Output>;
  createUser(argument: _userservice_User, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_userservice_User__Output>;
  createUser(argument: _userservice_User, options?: grpc.CallOptions): grpc.ClientReadableStream<_userservice_User__Output>;
  
  GetUser(argument: _userservice_UserId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userservice_User__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _userservice_UserId, metadata: grpc.Metadata, callback: grpc.requestCallback<_userservice_User__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _userservice_UserId, options: grpc.CallOptions, callback: grpc.requestCallback<_userservice_User__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _userservice_UserId, callback: grpc.requestCallback<_userservice_User__Output>): grpc.ClientUnaryCall;
  getUser(argument: _userservice_UserId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userservice_User__Output>): grpc.ClientUnaryCall;
  getUser(argument: _userservice_UserId, metadata: grpc.Metadata, callback: grpc.requestCallback<_userservice_User__Output>): grpc.ClientUnaryCall;
  getUser(argument: _userservice_UserId, options: grpc.CallOptions, callback: grpc.requestCallback<_userservice_User__Output>): grpc.ClientUnaryCall;
  getUser(argument: _userservice_UserId, callback: grpc.requestCallback<_userservice_User__Output>): grpc.ClientUnaryCall;
  
}

export interface UserServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateUser: grpc.handleServerStreamingCall<_userservice_User__Output, _userservice_User>;
  
  GetUser: grpc.handleUnaryCall<_userservice_UserId__Output, _userservice_User>;
  
}

export interface UserServiceDefinition extends grpc.ServiceDefinition {
  CreateUser: MethodDefinition<_userservice_User, _userservice_User, _userservice_User__Output, _userservice_User__Output>
  GetUser: MethodDefinition<_userservice_UserId, _userservice_User, _userservice_UserId__Output, _userservice_User__Output>
}
