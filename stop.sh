$(netstat -anp | grep 4000 | awk '{ split($7, a, "/"); print("kill -9", a[1])}')