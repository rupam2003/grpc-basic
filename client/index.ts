console.log("Hello via Bun!");import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import type { ProtoGrpcType } from './proto/user';
import type { User } from './proto/userservice/User';


const PROTO_PATH = './proto/user.proto';

const packageDefinition = protoLoader.loadSync(PROTO_PATH); 
const proto = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType;

const client = new proto.userservice.UserService('localhost:50051', grpc.credentials.createInsecure());

client.GetUser({ id: 100}, (err, response) => {
    if (err) {
        console.error("failed",err);
        return;
    }
    console.log('User:', response);
});


const createUserStream = client.CreateUser({ id: 1,name:"test",email:"test@gmail.com" });
createUserStream.on('data', (user:User) => {
    console.log('User:', user);
});
createUserStream.on('end', () => {
    console.log('User stream ended');
});