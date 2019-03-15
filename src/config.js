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
    USER_POOL_ID: "us-east-1_is3IQD8wW",
    APP_CLIENT_ID: "1ta7r68r0093u03rb4si0v2j0m",
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
    USER_POOL_ID: "us-east-1_IMzbslMBm",
    APP_CLIENT_ID: "2iu7pm6dltpeir68dvns56eo9j",
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
