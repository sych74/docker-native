//@req(next)

resp = jelastic.data.base.GetObjectsByCriteria('swarmTokens', {appid:'${env.appid}'})
if (resp.result != 0) return resp 
if (resp.objects.length == 0) return {result: 99, error: "not tokens found", type: "error"}

resp = {result:0, onAfterReturn : {}}

resp.onAfterReturn[next] = {
  manager: resp.objects[0]['manager'],
  worker: resp.objects[0]['worker']
}

return resp
