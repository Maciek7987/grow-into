import React, { useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Country, State } from "country-state-city";
import Select, { components } from "react-select";
import Modal from "../components/Modal";
import styles from "../styles/Form.module.scss";

const IndicatorsContainer = () => <div className={`arrow ${styles.arrow}`} />;
const Input = ({ autoComplete, ...props }) => (
  <components.Input {...props} maxLength={20} autoComplete="none" />
);

export default function Form({ item }) {
  const [states, setStates] = useState([]);
  const [oldValueCountry, setoldValueCountrye] = useState();

  const {
    control,
    clearErrors,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(errors);

  const handleChange = ({ value }) => {
    const states = State.getStatesOfCountry(value); //states that are in the country, e.target.value = countryCode
    setStates(states);
    if (oldValueCountry != value) setValue("state", ""); //set default value if country is change
    if (!states.length) clearErrors("state"); //if country hasn't states then remove error
    setoldValueCountrye(value);
  };
  ////////////////////////////////////////////////////////////
  const style = {
    container: (baseStyles, state) => ({
      ...baseStyles,
      "& + .labelPlaceholder": {
        color: state.isDisabled
          ? "#dfdfdf"
          : state.isFocused && (state.hasValue || state.selectProps.inputValue)
          ? "#000"
          : "#b3b3b3",
        fontWeight:
          state.isFocused && (state.hasValue || state.selectProps.inputValue)
            ? 500
            : 400,
        transform:
          state.hasValue || state.selectProps.inputValue
            ? "translateY(-50%)"
            : "translateY(115%)",
        transition: "200ms 3ms cubic-bezier(0.45, 0.05, 0.55, 0.95)",
        fontSize: state.hasValue || state.selectProps.inputValue ? 11.5 : 13.5,
        "@media (min-width: 1920px)": {
          fontSize:
            state.hasValue || state.selectProps.inputValue ? 11.5 : 15.5,
        },
      },
      "& ~ .whiteLineForAnimation": {
        transform:
          state.hasValue || state.selectProps.inputValue
            ? "translateY(-50%) scaleX(1)"
            : "translateY(-50%) scaleX(0)",
        transition:
          state.hasValue || state.selectProps.inputValue
            ? "100ms 20ms cubic-bezier(0, 0.87, 0, 0.91)"
            : "70ms 100ms cubic-bezier(0, 0, 0.63, 0.84)",
      },
      "& ~ .invalid": {
        display: (
          state.selectProps.name == "country" ? errors.country : errors.state
        )
          ? "block"
          : "none",
      },
      opacity: state.isDisabled ? 0.7 : 1,
    }),
    control: (baseStyles, state) => ({
      ...baseStyles,
      borderColor: (
        state.selectProps.name == "country" ? errors.country : errors.state
      )
        ? //1.check what is field name, 2.check if this field is disabled, 3.finally check if this field is focus
          "#de2a2a"
        : state.isDisabled
        ? "#dfdfdf"
        : state.isFocused
        ? "#000"
        : "#ddd",
      "& .arrow": {
        opacity: state.isDisabled ? 0 : state.isFocused ? 1 : 0.4,
      },
    }),
    valueContainer: (baseStyles) => ({
      ...baseStyles,
      overflow: "visible",
    }),
    input: (baseStyles) => ({
      ...baseStyles,
      gridTemplateColumns: "min-content",
      "input[type='text']": { cursor: "default" },
    }),
    option: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: state.isFocused ? "#f6eadb" : "#fff",
    }),
  };
  ////////////////////////////////////////////////////////////
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <section className={styles.shippingAdress}>
        <p className={styles.shippingAdress__title}>Shipping adress</p>
        <div className={styles.shippingAdress__wrap}>
          <Controller
            name="country"
            control={control}
            rules={{
              required: " Enter a country / region",
            }}
            render={({ field }) => (
              <Select
                {...field}
                components={{
                  IndicatorsContainer,
                  Input,
                }}
                value={field.value}
                onChange={(e) => {
                  field.onChange(e);
                  handleChange(e);
                }}
                instanceId={"country"}
                aria-labelledby="country"
                placeholder=""
                styles={style}
                unstyled={true}
                options={Country.getAllCountries().map((country) => ({
                  value: country.isoCode,
                  label: country.name,
                }))}
              />
            )}
          />
          <label
            htmlFor="country"
            className={`labelPlaceholder ${styles.labelPlaceholder}`}
          >
            Country / Region
          </label>
          <span
            className={`whiteLineForAnimation ${styles.whiteLineForAnimation}`}
          >
            Country / Region
          </span>
          <p className={`invalid ${styles.invalid}`}>
            {errors.country?.message}
          </p>
        </div>
        <div className={styles.shippingAdress__wrap}>
          <input
            className={styles.shippingAdress__input}
            maxLength="30"
            placeholder=" "
            aria-invalid={errors.name ? "true" : "false"}
            id="name"
            {...register("name", {
              required: "Enter a first name",
              pattern: {
                value: /^\D+$/,
                message: "Enter a first name",
              },
            })}
          />
          <label className={styles.labelPlaceholder} htmlFor="name">
            First name
          </label>
          <span className={styles.whiteLineForAnimation}>First name</span>
          <p className={styles.invalid}>{errors.name?.message}</p>
        </div>
        <div className={styles.shippingAdress__wrap}>
          <input
            className={styles.shippingAdress__input}
            maxLength="30"
            placeholder=" "
            aria-invalid={errors.surname ? "true" : "false"}
            {...register("surname", {
              required: "Enter a last name",
              pattern: {
                value: /^\D+$/,
                message: "Enter a last name",
              },
            })}
          />
          <label className={styles.labelPlaceholder} htmlFor="surname">
            Last name
          </label>
          <span className={styles.whiteLineForAnimation}> Last name</span>
          <p className={styles.invalid}>{errors.surname?.message}</p>
        </div>
        <div className={styles.shippingAdress__wrap}>
          <input
            className={styles.shippingAdress__input}
            maxLength="30"
            placeholder=" "
            aria-invalid={errors.adress ? "true" : "false"}
            {...register("adress", {
              required: "Enter an address",
            })}
          />
          <label className={styles.labelPlaceholder} htmlFor="adress">
            Adress
          </label>
          <span className={styles.whiteLineForAnimation}>Adress</span>
          <p className={styles.invalid}>{errors.adress?.message}</p>
        </div>
        <div className={styles.shippingAdress__wrap}>
          <input
            className={styles.shippingAdress__input}
            maxLength="30"
            placeholder=" "
            aria-invalid={errors.apartment ? "true" : "false"}
            {...register("apartment", {
              required: "Enter an apartment",
            })}
          />
          <label className={styles.labelPlaceholder} htmlFor="apartment">
            Apartment
          </label>
          <span className={styles.whiteLineForAnimation}> Apartment</span>
          <p className={styles.invalid}>{errors.apartment?.message}</p>
        </div>
        <div className={styles.shippingAdress__wrap}>
          <input
            className={styles.shippingAdress__input}
            maxLength="20"
            placeholder=" "
            aria-invalid={errors.city ? "true" : "false"}
            {...register("city", {
              required: "Enter a city",
              pattern: {
                value: /^\D+$/,
                message: "Enter a valid city",
              },
            })}
          />
          <label className={styles.labelPlaceholder} htmlFor="city">
            City
          </label>
          <span className={styles.whiteLineForAnimation}>City</span>
          <p className={styles.invalid}>{errors.city?.message}</p>
        </div>
        <div className={styles.shippingAdress__wrap}>
          <Controller
            name="state"
            control={control}
            rules={{
              validate: (value) =>
                !(value == "" && Boolean(states.length)) || "Enter a state",
            }}
            render={({ field }) => (
              <Select
                {...field}
                components={{
                  IndicatorsContainer,
                  Input,
                }}
                defaultValue=""
                value={field.value}
                onChange={field.onChange}
                isDisabled={states.length ? false : true}
                instanceId={"state"}
                aria-labelledby="state"
                placeholder=""
                styles={style}
                unstyled={true}
                options={states.map((state) => ({
                  value: state.name,
                  label: state.name,
                }))}
              />
            )}
          />
          <label
            htmlFor="state"
            className={`labelPlaceholder ${styles.labelPlaceholder}`}
          >
            State
          </label>
          <span
            className={`whiteLineForAnimation ${styles.whiteLineForAnimation}`}
          >
            State
          </span>
          <p className={`invalid ${styles.invalid}`}>{errors.state?.message}</p>
        </div>
        <div className={styles.shippingAdress__wrap}>
          <input
            className={styles.shippingAdress__input}
            maxLength="10"
            placeholder=" "
            aria-invalid={errors.zipCode ? "true" : "false"}
            {...register("zipCode", {
              required: "Enter a ZIP Code",
            })}
          />
          <label className={styles.labelPlaceholder} htmlFor="zipCode">
            ZIP Code
          </label>
          <span className={styles.whiteLineForAnimation}> ZIP Code</span>
          <p className={styles.invalid}>{errors.zipCode?.message}</p>
        </div>
        <div className={styles.shippingAdress__wrap}>
          <input
            className={styles.shippingAdress__input}
            maxLength="40"
            placeholder=" "
            aria-invalid={errors.email ? "true" : "false"}
            {...register("email", {
              required: "Enter a valid email",
              pattern: {
                value:
                  /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i,
                message: "You have not given a correct e-mail address",
              },
            })}
          />
          <label className={styles.labelPlaceholder} htmlFor="email">
            E-mail
          </label>
          <span className={styles.whiteLineForAnimation}> E-mail</span>
          <p className={styles.invalid}>{errors.email?.message}</p>
        </div>
        <div className={styles.shippingAdress__wrap}>
          <input
            className={styles.shippingAdress__input}
            maxLength="30"
            placeholder=" "
            aria-invalid={errors.phone ? "true" : "false"}
            {...register("phone", {
              pattern: {
                value: /^$|^\d+$/, //empty or only numbers
                message: "Enter a valid phone number",
              },
            })}
          />
          <label className={styles.labelPlaceholder} htmlFor="phone">
            Phone <span className={styles.optional}>(optional)</span>
          </label>
          <span className={styles.whiteLineForAnimation}>Phone</span>
          <p className={styles.invalid}>{errors.phone?.message}</p>
        </div>
      </section>
      <section className={styles.summary}>
        <p className={styles.summary__title}>Order summary</p>
        <div className={styles.wrap}>
          <div className={styles.summary__subtotal}>
            <p className={styles.name}>Subtotal</p>
            <p className={styles.subtotal}>
              {item ? item.itemTotal : "00"},00 USD
            </p>
          </div>
          <div className={styles.summary__shipping}>
            <p className={styles.name}>Shipping</p>
            <p className={styles.shipping}>Standard: 5 USD</p>
          </div>
        </div>
        <div className={styles.summary__total}>
          <p className={styles.name}>Total</p>
          <h2 className={styles.total}>
            {item ? item.itemTotal + 5 : "00"},00 USD
          </h2>
        </div>
      </section>
      <section className={styles.pay}>
        <p className={styles.pay__title}>Pay</p>
        {/* radio-1 */}
        <input
          className={styles.form__payInput}
          type="radio"
          value="payPal"
          {...register("pay", { required: true })}
          id="rd"
          defaultChecked
        />
        <label className={styles.form__payPal} htmlFor="rd">
          <svg
            className={styles.svg}
            viewBox="0 0 22 22"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className={styles.svg__border}
              cx="10.8643"
              cy="11.125"
              r="10"
              fill="white"
              stroke="black"
            />
            <circle
              className={styles.svg__dot}
              cx="10.8643"
              cy="11.1251"
              r="4.89583"
              fill="black"
              stroke="black"
            />
          </svg>
          <span className={`${styles.logo} ${styles.logoPayPal}`} />
        </label>
        {/* radio-2 */}
        <input
          className={styles.form__payInput}
          type="radio"
          value="applePay"
          {...register("pay", { required: true })}
          id="rd2"
        />
        <label className={styles.form__payApple} htmlFor="rd2">
          <svg
            className={styles.svg}
            viewBox="0 0 22 22"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className={styles.svg__border}
              cx="10.8643"
              cy="11.125"
              r="10"
              fill="white"
              stroke="black"
            />
            <circle
              className={styles.svg__dot}
              cx="10.8643"
              cy="11.1251"
              r="4.89583"
              fill="black"
              stroke="black"
            />
          </svg>
          <span className={`${styles.logo} ${styles.logoApplePay}`} />
        </label>
        {/* checkbox */}
        <input
          className={styles.form__termsInput}
          aria-invalid={errors.cb ? "true" : "false"}
          type="checkbox"
          {...register("cb", {
            required: "Check the required box",
          })}
          id="cb"
        />
        <div className={styles.wrap}>
          <label htmlFor="cb">
            <svg
              className={styles.svg}
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                className={styles.svg__border}
                x="1"
                y="0.5"
                width="18"
                height="18"
                rx="3.5"
                fill="white"
                stroke="black"
              />
              <path
                className={styles.svg__tick}
                d="M4.83089 9.04076L9.23162 13.6511L15.3787 6.17679"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className={styles.termsConditions}>I agree with </span>
          </label>
          <span className={styles.boldFont}>
            <Modal />
            ...
          </span>
        </div>
        <p className={styles.invalid}>{errors.cb?.message}</p>
      </section>
      <input
        type="submit"
        value="Pay now"
        className={styles.form__btn}
      />
    </form>
  );
}
