import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { User as _userservice_User, User__Output as _userservice_User__Output } from './userservice/User';
import type { UserId as _userservice_UserId, UserId__Output as _userservice_UserId__Output } from './userservice/UserId';
import type { UserServiceClient as _userservice_UserServiceClient, UserServiceDefinition as _userservice_UserServiceDefinition } from './userservice/UserService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  userservice: {
    User: MessageTypeDefinition<_userservice_User, _userservice_User__Output>
    UserId: MessageTypeDefinition<_userservice_UserId, _userservice_UserId__Output>
    UserService: SubtypeConstructor<typeof grpc.Client, _userservice_UserServiceClient> & { service: _userservice_UserServiceDefinition }
  }
}

