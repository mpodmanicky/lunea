import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-gunmetal">
      <Navbar />
      <div className="w-full p-5 flex flex-col">
        <div className="text-3xl md:text-left font-playfair text-charcoal px-4">
          FEATURED PRODUCTS
        </div>
        <div className="overflow-x-auto">
          <div className="flex flex-nowrap gap-2 p-4">
            <ProductCard
              title="Product 1"
              description="This is a short description of the product"
              price="129,99"
            />
            <ProductCard
              title="Product 2"
              description="This is a short description of the product"
              price="119,99"
            />
            <ProductCard
              title="Product 3"
              description="This is a short description of the product"
              price="224,99"
            />
            <ProductCard
              title="Product 4"
              description="This is a short description of the product"
              price="349,90"
            />
          </div>
        </div>
        <br></br>
        <div className="text-3xl md:text-left font-playfair text-charcoal px-4">
          LATEST BLOGS
        </div>
        <div className="overflow-x-auto">
          <div className="flex flex-nowrap p-4 gap-2">
            <BlogCard
              title="Blog 1"
              description="This is a short description of the blog post"
            />
            <BlogCard
              title="Blog 2"
              description="This is a short description of the blog post"
            />
            <BlogCard
              title="Blog 3"
              description="This is a short description of the blog post"
            />
            <BlogCard
              title="Blog 4"
              description="This is a short description of the blog post"
            />
            <BlogCard
              title="Blog 5"
              description="This is a short description of the blog post"
            />
            <BlogCard
              title="Blog 6"
              description="This is a short description of the blog post"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
