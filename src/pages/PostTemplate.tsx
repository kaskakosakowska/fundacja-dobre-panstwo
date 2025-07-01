import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { usePostData } from "@/hooks/usePostData";
import { PostHeader } from "@/components/post/PostHeader";
import { PostContent } from "@/components/post/PostContent";
import { PostSidebar } from "@/components/post/PostSidebar";
import { PostFooter } from "@/components/post/PostFooter";

const PostTemplate = () => {
  const { post, section, postId, getBackPath } = usePostData();

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F6F4EF' }}>
      <PostHeader post={post} getBackPath={getBackPath} />

      {/* Main Content */}
      <main className="px-6 pb-16">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Post Container */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', height: '678px' }}>
                <CardHeader>
                  <CardTitle className="text-2xl mb-4" style={{ color: '#333333' }}>
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="h-full">
                  <ScrollArea className="h-full max-h-[550px] pr-4">
                    <div className="relative">
                      {/* Image in top right corner */}
                      <img 
                        src="/lovable-uploads/a247c62f-0c85-460a-8ed0-b9c0be25623f.png" 
                        alt="Post image" 
                        className="float-right ml-6 mb-4 w-48 h-32 object-cover rounded-lg shadow-md"
                      />
                      
                      <PostContent post={post} section={section} postId={postId} />
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>

            {/* Right Side Containers */}
            <PostSidebar />
          </div>
        </div>
      </main>

      <PostFooter />
    </div>
  );
};

export default PostTemplate;