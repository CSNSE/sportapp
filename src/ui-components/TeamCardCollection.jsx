/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { listTeams } from "../graphql/queries";
import TeamCard from "./TeamCard";
import { getOverrideProps } from "./utils";
import { Collection, Pagination, Placeholder } from "@aws-amplify/ui-react";
import { generateClient } from "aws-amplify/api";
const nextToken = {};
const apiCache = {};
const client = generateClient();
export default function TeamCardCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [pageIndex, setPageIndex] = React.useState(1);
  const [hasMorePages, setHasMorePages] = React.useState(true);
  const [items, setItems] = React.useState([]);
  const [isApiPagination, setIsApiPagination] = React.useState(false);
  const [instanceKey, setInstanceKey] = React.useState("newGuid");
  const [loading, setLoading] = React.useState(true);
  const [maxViewed, setMaxViewed] = React.useState(1);
  const pageSize = 6;
  const isPaginated = false;
  React.useEffect(() => {
    nextToken[instanceKey] = "";
    apiCache[instanceKey] = [];
  }, [instanceKey]);
  React.useEffect(() => {
    setIsApiPagination(!!!itemsProp);
  }, [itemsProp]);
  const handlePreviousPage = () => {
    setPageIndex(pageIndex - 1);
  };
  const handleNextPage = () => {
    setPageIndex(pageIndex + 1);
  };
  const jumpToPage = (pageNum) => {
    setPageIndex(pageNum);
  };
  const loadPage = async (page) => {
    const cacheUntil = page * pageSize + 1;
    const newCache = apiCache[instanceKey].slice();
    let newNext = nextToken[instanceKey];
    while ((newCache.length < cacheUntil || !isPaginated) && newNext != null) {
      setLoading(true);
      const variables = {
        limit: pageSize,
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listTeams.replaceAll("__typename", ""),
          variables,
        })
      ).data.listTeams;
      newCache.push(...result.items);
      newNext = result.nextToken;
    }
    const cacheSlice = isPaginated
      ? newCache.slice((page - 1) * pageSize, page * pageSize)
      : newCache;
    setItems(cacheSlice);
    setHasMorePages(!!newNext);
    setLoading(false);
    apiCache[instanceKey] = newCache;
    nextToken[instanceKey] = newNext;
  };
  React.useEffect(() => {
    loadPage(pageIndex);
  }, [pageIndex]);
  React.useEffect(() => {
    setMaxViewed(Math.max(maxViewed, pageIndex));
  }, [pageIndex, maxViewed, setMaxViewed]);
  return (
    <div>
      <Collection
        type="grid"
        searchPlaceholder="Search..."
        templateColumns="1fr 1fr 1fr"
        autoFlow="row"
        alignItems="stretch"
        justifyContent="stretch"
        itemsPerPage={pageSize}
        isPaginated={!isApiPagination && isPaginated}
        items={itemsProp || (loading ? new Array(pageSize).fill({}) : items)}
        {...getOverrideProps(overrides, "TeamCardCollection")}
        {...rest}
      >
        {(item, index) => {
          if (loading) {
            return <Placeholder key={index} size="large" />;
          }
          return (
            <TeamCard
              t={item}
              key={item.id}
              {...(overrideItems && overrideItems({ item, index }))}
            ></TeamCard>
          );
        }}
      </Collection>
      {isApiPagination && isPaginated && (
        <Pagination
          currentPage={pageIndex}
          totalPages={maxViewed}
          hasMorePages={hasMorePages}
          onNext={handleNextPage}
          onPrevious={handlePreviousPage}
          onChange={jumpToPage}
        />
      )}
    </div>
  );
}
