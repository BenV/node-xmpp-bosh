// -*-  tab-width:4  -*-

exports.config = {
	port: 5280,
	host: '0.0.0.0',
	path: /^\/http-bind(\/+)?$/,
	logging: 'INFO',

	// The maximum number of bytes that the BOSH server will
	// "hold" from the client
	max_data_held: 100000,

	// Terminate the session if a stanza from XMPP server for
	// a stream exceeds max_xmpp_stanza_size bytes
	max_xmpp_stanza_size: 500000,

	// Don't entertain more than 'max_bosh_connections' simultaneous
	// connections on any BOSH session. This is related to the 'hold'
	// attribute
	max_bosh_connections: 2,

	// The maximum number of packets on either side of the current 'rid'
	// that we are willing to accept.
	window_size: 2,

	// How much time (in second) should we hold a response object
	// before sending and empty response on it?
	default_inactivity: 70,

	max_inactivity: 160,

	// The value (in second) of keepalive to set on the HTTP response
	// socket
	http_socket_keepalive: 60,

	// The maximum number of active streams allowed per BOSH session
	max_streams_per_session: 8,

	http_headers: { },

	// Set to a regular expression to be tested against the 'Origin' header
	// to allow setting the 'Access-Control-Allow-Origin' header to that origin.
	// This is useful for using 'Access-Control-Allow-Credentials' with
	// multiple hosts.
	access_control_allow_origins: null,

	//
	// A list of Domains for which TLS should NOT be used
	// if the XMPP server supports STARTTLS but does NOT
	// require it.
	//
	// See this link for details:
	// http://code.google.com/p/node-xmpp-bosh/issues/detail?id=11
	//
	no_tls_domains: [ /* 'chat.facebook.com' */ ],

	// Set to 'true' to disable the '_xmpp-client._tcp' SRV lookup and
	// just resolve the hostname instead.
	no_srv: false,

	//
	// A list of domains (string or regex) to either deny or allow
	// connections to.
	//
	// Note: ONLY One of the 2 (deny or allow) shall be used depending
	// on which array has values.
	//
	// * If only one of the arrays is defined, then the one that is
	// * non-empty/defined shall be used.
	//
	// * If both are defined, then the ALLOW list is used and ONLY
	// * connections to the domains listed in ALLOW are connected to.
	//
	firewall: {
		// allow: [ /* 'jabber.org', /(.*\.)?jappix.com$/ */ ],
		deny:  [ /* 'gmail.com' */ ]
	},

	// If the route attribute is set, allow connections ONLY if the
	// route attribute matches the regex below. This can be used in
	// conjunction with 'firewall' to disallow connections if an IP
	// address is specified in the route attribute of the request.
	//
	// The default configuration permits all values of the route
	// attribute.
	//
	route_filter: /.*/,

    // Set to 'true' if you want:
    //
    // 1. The session creation response to contain the <stream:features/> tag.
    // 2. NO multiple streams support (only supports a single stream
    // per session in this mode).
    //
    // Useful to work around a pidgin (libpurple) bug.
    //
    pidgin_compatible: true,

    // The maximum length of an XML stanza to be printed. Set to -1
    // for unlimited line length.
    trim_default_length: 256,

    // The password used to protect the /PATH/sysinfo/ URL. The
    // username to use when prompted for authentication is 'admin'.
    system_info_password: '',

	// The period, in seconds, between sending WebSocket ping frames to each
	// client. If a client fails to respond with a pong frame twice in a row,
	// the connection will be closed.
	// Set to 0 to disable sending of WebSocket pings.
	websocket_ping_interval: 30,

	// Set to true to use legacy <stream> tags instead of <open> and <close>
	use_stream_tags: false,

	// Enable/disable compression or tune settings by setting to an object
	permessage_deflate: true,

	// Enable the use of the faster LTX XML parser. This is a tradeoff between
	// speed and error handling
	use_ltx_parser: false,

  // Enable the use of the faster LTX XML parser for BOSH as well. This will
	// default to the value of use_ltx_parser, but can be used to disable LTX for
	// BOSH if it is enabled for websockets
	use_ltx_parser_for_bosh: false,

	// Connection timeout to remote host
	connection_timeout: 10000
};
