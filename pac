function FindProxyForURL(url, host) {
      // All other requests go through port 8080 of proxy.example.com.
      // should that fail to respond, go directly to the WWW:
      return "PROXY 192.168.8.7:9001; DIRECT";
   }
