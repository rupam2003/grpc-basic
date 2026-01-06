import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import type { ProtoGrpcType } from './proto/greeter';
import type { HelloReply } from './proto/tutorial/HelloReply';
import type { HelloRequest } from './proto/tutorial/HelloRequest';

const PROTO_PATH = './proto/greeter.proto';

const packageDefinition = protoLoader.loadSync(PROTO_PATH); 
const proto = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType;

function sayHello( call:grpc.ServerUnaryCall<HelloRequest, HelloReply>, callback:any ){
  callback(null, { message: 'Hello ' + call.request.name + " This is from server" })
}

const server = new grpc.Server();
server.addService(proto.tutorial.Greeter.service, { sayHello: sayHello });
server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
        console.error("failed",err);
        return;
    }
    console.log('GRPC Server running at http://0.0.0.0:' + port);
});