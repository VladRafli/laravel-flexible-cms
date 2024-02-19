import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { ThemeProvider } from "@/Components/ThemeProvider";
import { Card, CardContent } from "@/Components/ui/Card";

export default function Dashboard({ auth }: PageProps) {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <AuthenticatedLayout user={auth.user}>
                <Head title="Dashboard" />

                <section className="h-screen flex justify-center items-center">
                    <Card>
                        <CardContent className="p-6">
                            <p>
                                Nothing to show here. Check navigation bar to
                                see other features to see.
                            </p>
                        </CardContent>
                    </Card>
                </section>
            </AuthenticatedLayout>
        </ThemeProvider>
    );
}
