import React from "react";
import PageLayout from "layouts/page_layout";
import { Route, Switch } from "react-router-dom";
import { Users, Reservations, NewsGrid, NewsForm } from "components/dashboard";

export const Dashboard = () => {
  return (
    <PageLayout dashBoard>
      <Switch>
        <Route exact path="/dashboard/users" component={Users} />

        <Route exact path="/dashboard/news" component={NewsGrid} />
        <Route exact path="/dashboard/news/create" component={NewsForm} />
        <Route exact path="/dashboard/news/edit/:id" component={NewsForm} />

        <Route exact path="/dashboard/reservations" component={Reservations} />
      </Switch>
    </PageLayout>
  );
};
