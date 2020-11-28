import React from "react";
import {Panel} from "@vkontakte/vkui";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import {useRouter} from "@happysanta/router";
import {PAGE_RATING} from "../../router/router";

export const RootPage = ({id}) => {
    const router = useRouter();

    return (
        <Panel id={id}>
            test
            <Button mode="secondary" onClick={() => router.pushPage(PAGE_RATING)}>Secondary</Button>
        </Panel>
    );
}
