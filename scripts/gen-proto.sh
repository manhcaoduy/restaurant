# Path to this plugin
protoc_gen_ts_path="./node_modules/.bin/protoc-gen-ts_proto"
out_dir="./backend/libs/shared/proto"
proto_root="./backend/proto"

protoc \
  --plugin="${protoc_gen_ts_path}" \
  --ts_proto_out=${out_dir} \
  --ts_proto_opt=env=node \
  --ts_proto_opt=outputEncodeMethods=true \
  --ts_proto_opt=outputPartialMethods=true \
  --ts_proto_opt=outputJsonMethods=true \
  --ts_proto_opt=nestJs=true \
  --ts_proto_opt=addGrpcMetadata=true \
  --ts_proto_opt=unrecognizedEnum=false \
  --ts_proto_opt=forceLong=string \
  --ts_proto_opt=useOptionals=messages \
  --ts_proto_opt=esModuleInterop=true \
  --proto_path=${proto_root} \
  $(find ${proto_root} -name "*.proto")

./node_modules/.bin/prettier --config ./.prettierrc --write ${out_dir}
