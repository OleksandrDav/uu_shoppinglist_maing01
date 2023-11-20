"use strict";
const ShoppinglistMainUseCaseError = require("./shoppinglist-main-use-case-error.js");

const Init = {
  UC_CODE: `${ShoppinglistMainUseCaseError.ERROR_PREFIX}init/`,

  InvalidDtoIn: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Init.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  SchemaDaoCreateSchemaFailed: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.status = 500;
      this.code = `${Init.UC_CODE}schemaDaoCreateSchemaFailed`;
      this.message = "Create schema by Dao createSchema failed.";
    }
  },

  SetProfileFailed: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Init.UC_CODE}sys/setProfileFailed`;
      this.message = "Set profile failed.";
    }
  },

  CreateAwscFailed: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Init.UC_CODE}createAwscFailed`;
      this.message = "Create uuAwsc failed.";
    }
  },
};

const MigrateSchema = {
  UC_CODE: `${ShoppinglistMainUseCaseError.ERROR_PREFIX}migrateSchema/`,

  SchemaDaoCreateSchemaFailed: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.status = 500;
      this.code = `${MigrateSchema.UC_CODE}schemaDaoCreateSchemaFailed`;
      this.message = "Create schema by Dao createSchema failed.";
    }
  },
};
module.exports = {
  Init,
  MigrateSchema
};
