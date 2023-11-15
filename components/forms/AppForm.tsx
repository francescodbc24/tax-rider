import { Formik, FormikHelpers, FormikValues } from "formik";
import React, { FunctionComponent,PropsWithChildren } from "react";

export interface Values {
  [field: string]: any;
}

interface AppFormProps {
  initialValues: Values;
  onSubmit: (
    values: FormikValues,
    formikHelpers: FormikHelpers<FormikValues>
  ) => void | Promise<any>;
  validationSchema?: any;
}

const AppForm: FunctionComponent<PropsWithChildren<AppFormProps>> = ({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}) => {
  return (
    <Formik
      enableReinitialize={false}
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

export default AppForm;
