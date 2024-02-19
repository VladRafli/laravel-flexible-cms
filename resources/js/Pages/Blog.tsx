import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { ThemeProvider } from "@/Components/ThemeProvider";
import { Button } from "@/Components/ui/Button";

export default function Blog({ auth }: PageProps) {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <AuthenticatedLayout user={auth.user} header={
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Blog</h1>
                    <div>
                        <Button>Create</Button>
                    </div>
                </div>
            }>
                <Head title="Blog" />

                <section className="p-10 flex justify-center items-center">
                    <h1>Published blog</h1>
                </section>
            </AuthenticatedLayout>
        </ThemeProvider>
    );
}
