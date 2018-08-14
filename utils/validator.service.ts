export class ValidatorService {
  /**
   * 验证手机号
   */
  public static equal({ model, key, relation, message }) {
    return (rule, value, callback) => {

      if (relation) {
        if (model[key] !== "") {
          let form = relation() as any
          form.validateField(key);
        }

        return callback()
      }

      if (value === model[key]) {
        callback();
      } else {
        callback(new Error(message || "输入值不一致"));
      }
    }
  }

  
}