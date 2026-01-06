// Original file: proto/greeter.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { HelloReply as _tutorial_HelloReply, HelloReply__Output as _tutorial_HelloReply__Output } from '../tutorial/HelloReply';
import type { HelloRequest as _tutorial_HelloRequest, HelloRequest__Output as _tutorial_HelloRequest__Output } from '../tutorial/HelloRequest';

export interface GreeterClient extends grpc.Client {
  SayHello(argument: _tutorial_HelloRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tutorial_HelloReply__Output>): grpc.ClientUnaryCall;
  SayHello(argument: _tutorial_HelloRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tutorial_HelloReply__Output>): grpc.ClientUnaryCall;
  SayHello(argument: _tutorial_HelloRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tutorial_HelloReply__Output>): grpc.ClientUnaryCall;
  SayHello(argument: _tutorial_HelloRequest, callback: grpc.requestCallback<_tutorial_HelloReply__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _tutorial_HelloRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tutorial_HelloReply__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _tutorial_HelloRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tutorial_HelloReply__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _tutorial_HelloRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tutorial_HelloReply__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _tutorial_HelloRequest, callback: grpc.requestCallback<_tutorial_HelloReply__Output>): grpc.ClientUnaryCall;
  
}

export interface GreeterHandlers extends grpc.UntypedServiceImplementation {
  SayHello: grpc.handleUnaryCall<_tutorial_HelloRequest__Output, _tutorial_HelloReply>;
  
}

export interface GreeterDefinition extends grpc.ServiceDefinition {
  SayHello: MethodDefinition<_tutorial_HelloRequest, _tutorial_HelloReply, _tutorial_HelloRequest__Output, _tutorial_HelloReply__Output>
}
