const dev = {
  apiGateway: {
    REGION: "ap-southeast-1",
    URL: "https://0tikjawy0i.execute-api.ap-southeast-1.amazonaws.com/dev",
  },
  cognito: {
    REGION: "ap-southeast-1",
    USER_POOL_ID: "ap-southeast-1_bJdv3WtDY",
    APP_CLIENT_ID: "72nnvch4iop5ivm7l9qk8liebq",
    IDENTITY_POOL_ID: "ap-southeast-1:626e5eee-6060-42ce-b200-41a9f123d515",
  },
};

const prod = {
  apiGateway: {
    REGION: "ap-southeast-1",
    URL: "https://0tikjawy0i.execute-api.ap-southeast-1.amazonaws.com/dev",
  },
  cognito: {
    REGION: "ap-southeast-1",
    USER_POOL_ID: "ap-southeast-1_bJdv3WtDY",
    APP_CLIENT_ID: "72nnvch4iop5ivm7l9qk8liebq",
    IDENTITY_POOL_ID: "ap-southeast-1:626e5eee-6060-42ce-b200-41a9f123d515",
  },
};

export const awsConfig = {
  MAX_ATTACHMENT_SIZE: 5000000,
  ...(process.env.NODE_ENV === "development" ? dev : prod),
};
