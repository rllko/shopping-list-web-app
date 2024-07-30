import { Link } from "react-router-dom"

export default function RegisterForm({formik}) {
    const {values,errors,handleChange,touched,isSubmitting,onBlur,handleSubmit} = formik;
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 pb-0">
            <div>
                <input placeholder="Username" 
                id="username" 
                type="text" 
                value={values.username}
                onChange={handleChange} 
                onBlur={onBlur}
                className={`border ${errors.username && touched.username ? 'border-red-700' :'border-zinc-700'} p-3 w-full text-zinc-900 bg-white rounded-2xl`}/>
                {errors.username && touched.username && <span className="text-red-700 text-[0.75rem] text-left mt-[0.25rem]"> {errors.username} </span>}
            </div>

            <div>
                <input placeholder="E-mail" 
                id="email"  
                type="email" 
                value={values.email}
                onChange={handleChange} 
                onBlur={onBlur}
                className={`border ${errors.email && touched.email ? 'border-red-700' :'border-zinc-700'} p-3 w-full text-zinc-900 bg-white rounded-2xl`}/>
                {errors.email && touched.email && <span className="text-red-700 text-[0.75rem] text-left mt-[0.25rem]"> {errors.email} </span>}
            </div>

            <div>
                <input placeholder="Password" 
                id="password" 
                type="password" 
                onChange={handleChange} 
                value={values.password}
                onBlur={onBlur}
                className={`border ${errors.password && touched.password ? 'border-red-700' :'border-zinc-700'} p-3 w-full text-zinc-900 bg-white rounded-2xl`} 
                data-type="password"/>
                {errors.password && touched.password && <span className="text-red-700 text-[0.75rem] text-left mt-[0.25rem]"> {errors.password} </span>}
            </div> 

            <div>
                <input 
                placeholder="Repeat Password" 
                id="confirmPassword" 
                value={values.confirmPassword}
                type="password" 
                onChange={handleChange} 
                onBlur={onBlur}
                className={`border ${errors.confirmPassword && touched.confirmPassword ? 'border-red-700' :'border-zinc-700'} p-3 w-full text-zinc-900 bg-white rounded-2xl`} 
                data-type="password"/>
                {errors.confirmPassword && touched.confirmPassword && <span className="text-red-700 text-[0.75rem] text-left mt-[0.25rem]"> {errors.confirmPassword} </span>}
            </div>

            <div className="flex items-center">
                <input id="termsOfService" value={values.termsOfService} onChange={handleChange} type="checkbox" className="mr-2 invert" />
                <p>I accept the terms of service</p>
            </div>
            {errors.termsOfService && <span className="text-red-700 text-[0.75rem] text-left mt-[0.25rem]"> {errors.termsOfService} </span>}

            <div className=" md:justify-normal md:flex justify-between items-center mt-2">
            <Link to={"/shopping-list-web-app/login"} className="text-black hidden lg:!block hover:text-black">Already have an account?</Link>
                <button type="submit" disabled={isSubmitting} className={`bg-black ${isSubmitting? 'opacity-75' : ''} w-full lg:w-1/3 md:ml-auto text-white font-bold`}>
                    Register
                </button>
            </div>
            <div className="flex justify-end items-center">
                <Link to={"/shopping-list-web-app/login"} className="text-black lg:hidden hover:text-black">Already have an account? Login in</Link>
            </div>
        </form>)

}

