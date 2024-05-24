import AboutPage from "@/components/layout/About";
import VideoCategoriesPage from "@/components/layout/VideoCategories";
import CourseCategriesPage from "@/components/layout/CourseCategories";

export default function Home() {
  return (
    <main className="min-h-screen">
        <AboutPage />
        <div className="space-y-10">
            <VideoCategoriesPage title="Video By Categories" />
            <CourseCategriesPage title="Course By Categories" />
        </div>
    </main>
  );
}
