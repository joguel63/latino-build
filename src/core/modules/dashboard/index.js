import React from "react";
import PageLayout from "layouts/page_layout";
import { Route, Switch } from "react-router-dom";
import { Users, News, Reservations } from "components/dashboard";

export const Dashboard = () => {
  return (
    <PageLayout dashBoard>
      <Switch>
        <Route exact path="/dashboard/users" component={Users} />
        <Route exact path="/dashboard/news" component={News} />
        <Route exact path="/dashboard/reservations" component={Reservations} />
      </Switch>
    </PageLayout>
  );
};
