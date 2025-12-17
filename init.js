load('api_rpc.js');
load('api_shadow.js');

RPC.addHandler('Reveal', function() {
  print('Node 062 activates: don't speed');
  return {phase: 1.75476};
});

print('Mongoose OS Brain 062 online – hydrogen valve ready');
