import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import type { ProtoGrpcType } from './proto/user';
import type { User } from './proto/userservice/User';
import type { UserId } from './proto/userservice/UserId';

const PROTO_PATH = './proto/user.proto';

const packageDefinition = protoLoader.loadSync(PROTO_PATH,
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  }
); 
const proto = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType;

function getUser( call:grpc.ServerUnaryCall<UserId, User>, callback:grpc.sendUnaryData<User> ){
  callback(null,{ 
    id: call.request.id,
    name: 'Hello ' + call.request.id + " This is from server",
    email: 'Hello ' + call.request.id + " This is from server"
  })
}

function createUser( call:grpc.ServerWritableStream<User, User> ){
  let i = 0;
  const interval = setInterval(() => {
    
    if(i > 5){
      clearInterval(interval);
      call.end();
      return
    }
    call.write({
      id: i,
      name: 'Hello ' + i + " This is from server",
      email: 'Hello ' + i + " This is from server"
    })
    i++;
  }, 1000);
}

const server = new grpc.Server();
server.addService(proto.userservice.UserService.service, {GetUser:getUser,CreateUser:createUser });
server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
        console.error("failed",err);
        return;
    }
    console.log('GRPC Server running at http://0.0.0.0:' + port);
});