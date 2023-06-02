import React from "react";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import {projectsubmitSchema} from '../schemas';
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose, AiFillExclamationCircle, AiFillCheckCircle } from "react-icons/ai";
import {submitProject} from '../actions/teamAction';

const initialValues = {
    projectyoutube: "",
    projectabstract: "",
    agreeToTerms: false,
  };

const ProjectSubmit = () => {

    const teamState = useSelector((state) => state.loginTeamReducer);
    const { currentTeam } = teamState;

    const dispatch = useDispatch();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: projectsubmitSchema,
      onSubmit: (values, action) => {
        dispatch(submitProject(currentTeam._id,currentTeam.tname,currentTeam.pname,values.projectabstract,values.projectyoutube));
        action.resetForm();
      },
    });

  return (
    <>
      <div className="flex justify-end py-8 px-12">
        <NavLink to="/">
          <AiOutlineClose className="text-3xl font-bold cursor-pointer" />
        </NavLink>
      </div>
      <div className="flex flex-col gap-20 md:pt-24 pb-40">
      <h1 className="text-5xl text-center">Project Submission</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center gap-10">
        <span className="flex flex-col gap-2 md:w-3/5 w-full px-4 md:px-0">
          {" "}
          <span className="text-2xl">Project Abstract Link </span>{" "}
          <span className="text-sm">
          Note: Please add a Google drive link containing pdf of your project abstract.{" "}
          </span>{" "}
          <div className="relative text-start">
            <input
              type="text"
              placeholder="Enter the project abstract link"
              className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
              autoComplete="off"
              name="projectabstract"
              value={values.projectabstract}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {values.projectabstract === "" ? null : errors.projectabstract && touched.projectabstract ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : (
                <AiFillCheckCircle className="absolute fill-green-500 right-4 text-xl top-3" />
              )}
              {values.projectabstract === "" && errors.projectabstract && touched.projectabstract ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : null}
              {errors.projectabstract && touched.projectabstract ? (
                <p className="text-red-500">{errors.projectabstract}</p>
              ) : null}
          </div>
        </span>
        <span className="flex flex-col gap-2 md:w-3/5 w-full md:px-0 px-4">
          {" "}
          <span className="text-2xl">Project Youtube Link </span>{" "}
          <span className="text-sm">
            Note : You have to create a video of your project explaining
            briefly not more than 10 minutes and upload it on the youtube
            and provide us the link.{" "}
          </span>{" "}
          <div className="relative text-start">
            <input
              type="text"
              placeholder="Enter the project youtube link"
              className="border-solid border-2 shadow-sm shadow-gray-400 border-white/30 bg-white/5 font-semibold outline-none text-white rounded-lg focus:border-white py-2 px-4 w-full"
              autoComplete="off"
              name="projectyoutube"
              value={values.projectyoutube}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {values.projectyoutube === "" ? null : errors.projectyoutube && touched.projectyoutube ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : (
                <AiFillCheckCircle className="absolute fill-green-500 right-4 text-xl top-3" />
              )}
              {values.projectyoutube === "" && errors.projectyoutube && touched.projectyoutube ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : null}
              {errors.projectyoutube && touched.projectyoutube ? (
                <p className="text-red-500">{errors.projectyoutube}</p>
              ) : null}
          </div>
        </span>
        <div className="text-start md:w-3/5 w-full px-4 md:px-0">
          <div className="flex justify-start items-center">
            <input
              type="checkbox"
              className="border-solid border-2 rounded-3xl border-black"
              name="agreeToTerms"
              checked={values.agreeToTerms}
              onChange={handleChange}
              style={{ accentColor: "#308d42" }}
            />
            <span className="ml-2 text-white flex">
              I accept the &nbsp;{" "}
              <NavLink to='/termspolicy' className="flex text-teal-500 hover:text-white font-bold">
                <p>
                  Terms of Use
                </p>
                &nbsp; & &nbsp;
                <p>
                  Privacy Policy
                </p>
                </NavLink>
            </span>
          </div>
          {errors.agreeToTerms && touched.agreeToTerms && (
            <div className="text-red-500">{errors.agreeToTerms}</div>
          )}
        </div>
        <div className="flex justify-center mt-4">
          {values.agreeToTerms === false ||
          (errors.agreeToTerms && touched.agreeToTerms) ? (
            <button className=" bg-slate-200/20 text-black font-semibold w-[250px] rounded-full  h-[45px] text-1xl hover:bg-teal-500/20 hover:text-slate-100 md:mx-1 mx-2 ">
              Submit Project Youtube Link
            </button>
          ) : (
            <button className=" bg-slate-200 text-black font-semibold w-[250px] rounded-full  h-[45px] text-1xl hover:bg-teal-500 hover:text-slate-100 md:mx-1 mx-2 ">
              Submit Project Youtube Link
            </button>
          )}
        </div>
        </div>
      </form>
      </div>
    </>
  );
};

export default ProjectSubmit;
