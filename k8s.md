Very important command:

```jsx
kubectl create deployment nginx--image=nginx--dry-run=client-o yaml

This generates YAML automatically.
```


Also:

```
kubectl explain deployment.spec.template.spec

This shows documentation directly in terminal.
```

In Kubernetes, `kind` means:

> “What type of Kubernetes object is this?”
> 

```yaml
kind: Pod
```

This tells Kubernetes:

> “Create a Pod.”
> 

Some common kinds:

```yaml
kind: Pod
kind: Deployment
kind: Service
kind: ConfigMap
kind: Secret
```

Here:

- `kind: Pod` → create a Pod
- `metadata.name` → pod name
- `spec` → how pod should run


## 4. `spec`

Defines the desired state/configuration.

```
spec:
  containers:
    - name: nginx
      image: nginx
```

Inside `spec`, we define:

- containers
- ports
- replicas
- volumes
- environment variables
- networking rules

============================================

If your Kubernetes pod is running, you can check your server in a few ways.

1. Check pod status

```bash
kubectl get pods
```

1. See pod logs

```bash
kubectl logs <pod-name>
```

1. Enter inside the pod

```bash
kubectl exec -it <pod-name> -- sh
```

If Ubuntu image:

```bash
kubectl exec -it <pod-name> -- bash
```

1. Check service

```bash
kubectl get svc
```