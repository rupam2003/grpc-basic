console.log("Hello via Bun!");import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import type { ProtoGrpcType } from './proto/greeter';
import type { HelloReply } from './proto/tutorial/HelloReply';
import type { HelloRequest } from './proto/tutorial/HelloRequest';

const PROTO_PATH = './proto/greeter.proto';

const packageDefinition = protoLoader.loadSync(PROTO_PATH); 
const proto = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType;

const client = new proto.tutorial.Greeter('localhost:50051', grpc.credentials.createInsecure());

client.sayHello({ name: 'Rupam' }, (err, response) => {
    if (err) {
        console.error("failed",err);
        return;
    }
    console.log('Greeting:', response?.message);
});
