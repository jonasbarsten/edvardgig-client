const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "edvardgig-api-dev-attachmentsbucket-195v7dxwv5snb"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://api.edvardgig.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_ZDcHWMQvz",
    APP_CLIENT_ID: "5qh8q6fubkftb714ui8d72if1n",
    IDENTITY_POOL_ID: "us-east-1:dbe40d09-e89c-4be5-ac04-f876dccf2628"
  },
  STRIPE_KEY: "pk_test_n2gv2sv6hqOzVatluoRCBIRK"
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "edvardgig-api-prod-attachmentsbucket-19g9xbyims3su"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://api.edvardgig.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_wuVQz58Cw",
    APP_CLIENT_ID: "38ss0qdl1in0dvlgmh8qt5c1md",
    IDENTITY_POOL_ID: "us-east-1:2531c017-281e-4ca3-a6d2-8676ea83908f"
  },
  STRIPE_KEY: "pk_test_n2gv2sv6hqOzVatluoRCBIRK"
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
