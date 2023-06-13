import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import { BiError } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        login: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />
            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <div>
                    <InputLabel
                        Icon={errors.login && BiError}
                        htmlFor="login"
                        value="Username or Email"
                    />

                    <TextInput
                        id="login"
                        type="text"
                        name="login"
                        value={data.login}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData("login", e.target.value)}
                    />
                    <InputError message={errors.login} className="mt-2" />
                </div>

                <div className="mt-4 relative">
                    <div className="flexible justify-between">
                        <InputLabel
                            Icon={errors.password && BiError}
                            htmlFor="password"
                            value="Password"
                        />
                        {canResetPassword && errors.password && (
                            <Link
                                href={route("password.request")}
                                className="font-medium text-[0.85rem] text-gray-600 dark:text-gray-300 hover:text-darker dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/0 dark:focus:ring-offset-dark"
                            >
                                Forgot your password?
                            </Link>
                        )}
                    </div>

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData("password", e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <label className="flexible">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                        />
                        <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                            Remember me
                        </span>
                    </label>
                </div>

                <div className="flex flex-col items-start mt-5 gap-3">
                    <PrimaryButton className="w-full" disabled={processing}>
                        Log in
                    </PrimaryButton>
                    {canResetPassword && (
                        <Link
                            href={route("register")}
                            className="underline text-xs text-gray-600 dark:text-gray-400 hover:text-darker dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/0 dark:focus:ring-offset-dark"
                        >
                            Don't have an account? Register
                        </Link>
                    )}
                </div>
            </form>
            <div className="mt-6 flexible-center gap-2 text-gray-400 text-xs mb-6">
                <div className="w-1/3 bg-gray-400 h-[1px]"/>
                <p>Or sign in with</p>
                <div className="w-1/3 bg-gray-400 h-[1px]"/>
            </div>
            <a href="/auth/google/redirect">
                <PrimaryButton
                    className="w-full flex justify-center items-center gap-2 mb-6 bg-black dark:bg-white dark:text-gray-700"
                >
                    <FcGoogle size={20}/>
                    Sign in with Google
                </PrimaryButton>
            </a>
        </GuestLayout>
    );
}
