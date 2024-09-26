import React from "react";
import clsx from "clsx";
import {
  HtmlClassNameProvider,
  ThemeClassNames,
} from "@docusaurus/theme-common";
import {
  BlogPostProvider,
  useBlogPost,
} from "@docusaurus/theme-common/internal";
import BlogLayout from "@theme/BlogLayout";
import BlogPostPageMetadata from "@theme/BlogPostPage/Metadata";
import { BlogTOC } from "../../refine-theme/blog-toc";

import {
  BlogPostPageView,
  PostPaginator,
  AuthorCardWithProps,
} from "../../components/blog";

function BlogPostPageContent({ children }) {
  const { metadata, toc } = useBlogPost();
  const { relatedPosts } = metadata;
  const authorData = metadata.authors[0];

  return (
    <BlogLayout toc={<BlogTOC toc={toc} />}>
      <BlogPostPageView>{children}</BlogPostPageView>
      <AuthorCardWithProps author={authorData} />
      <PostPaginator title="მსგავსი პოსტები" posts={relatedPosts} />
    </BlogLayout>
  );
}

export default function BlogPostPage(props) {
  const BlogPostContent = props.content;
  return (
    <BlogPostProvider content={props.content} isBlogPostPage>
      <HtmlClassNameProvider
        className={clsx(
          ThemeClassNames.wrapper.blogPages,
          ThemeClassNames.page.blogPostPage,
        )}
      >
        <BlogPostPageMetadata />
        <BlogPostPageContent>
          <BlogPostContent />
        </BlogPostPageContent>
      </HtmlClassNameProvider>
    </BlogPostProvider>
  );
}
