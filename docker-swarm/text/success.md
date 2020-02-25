You can use Jelastic [SSH Gate](https://docs.jelastic.com/ssh-gate) to establish connection to any node within your account.

### Add a Manager node to the cluster
```
docker swarm join --token \
${globals.manager-token} \
${nodes.cp.master.intIP}:2377
```

### Add a Worker node to the cluster
```
docker swarm join --token \
${globals.worker-token} \
${nodes.cp.master.intIP}:2377
```

**Note:** The above-specified strings are suitable to connect nodes hosted inside the same platform. To include external swarm members, replace the last line with the master node [endpoint](https://docs.jelastic.com/endpoints).
