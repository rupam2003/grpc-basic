import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { GreeterClient as _tutorial_GreeterClient, GreeterDefinition as _tutorial_GreeterDefinition } from './tutorial/Greeter';
import type { HelloReply as _tutorial_HelloReply, HelloReply__Output as _tutorial_HelloReply__Output } from './tutorial/HelloReply';
import type { HelloRequest as _tutorial_HelloRequest, HelloRequest__Output as _tutorial_HelloRequest__Output } from './tutorial/HelloRequest';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  tutorial: {
    Greeter: SubtypeConstructor<typeof grpc.Client, _tutorial_GreeterClient> & { service: _tutorial_GreeterDefinition }
    HelloReply: MessageTypeDefinition<_tutorial_HelloReply, _tutorial_HelloReply__Output>
    HelloRequest: MessageTypeDefinition<_tutorial_HelloRequest, _tutorial_HelloRequest__Output>
  }
}

