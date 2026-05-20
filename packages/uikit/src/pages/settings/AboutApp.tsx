import React from 'react';
import styled from 'styled-components';
import { InnerBody } from '../../components/Body';
import { SubHeader } from '../../components/SubHeader';
import { Body2, H2 } from '../../components/Text';
import { useTranslation } from '../../hooks/translation';
import { useIsFullWidthMode } from '../../hooks/useIsFullWidthMode';
import {
    DesktopViewHeader,
    DesktopViewHeaderContent,
    DesktopViewPageLayout
} from '../../components/desktop/DesktopViewLayout';
import { ForTargetEnv } from '../../components/shared/TargetEnv';

const Card = styled.div`
    padding: 16px 18px;
    border-radius: 14px;
    background: ${p => p.theme.backgroundContent};
    border: 1px solid ${p => p.theme.separatorCommon};
`;

const Block = styled(Body2)`
    color: ${p => p.theme.textSecondary};
    line-height: 1.55;
    margin: 0 0 14px;

    &:last-child {
        margin-bottom: 0;
    }
`;

const LangLabel = styled(Body2)`
    color: ${p => p.theme.textTertiary};
    font-size: 12px;
    margin: 0 0 6px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
`;

const Content = () => {
    const { t } = useTranslation();

    return (
        <>
            <H2 style={{ margin: '0 0 12px' }}>{t('about_app_title')}</H2>
            <Card>
                <LangLabel>Қазақша</LangLabel>
                <Block>{t('about_app_description_kk')}</Block>
                <LangLabel>Русский</LangLabel>
                <Block>{t('about_app_description_ru')}</Block>
            </Card>
        </>
    );
};

export const AboutApp = React.memo(() => {
    const { t } = useTranslation();
    const isProDisplay = useIsFullWidthMode();

    if (isProDisplay) {
        return (
            <DesktopViewPageLayout>
                <ForTargetEnv env="mobile">
                    <DesktopViewHeader>
                        <DesktopViewHeaderContent title={t('about_app_screen_title')} />
                    </DesktopViewHeader>
                </ForTargetEnv>
                <Content />
            </DesktopViewPageLayout>
        );
    }

    return (
        <>
            <SubHeader title={t('about_app_screen_title')} />
            <InnerBody>
                <Content />
            </InnerBody>
        </>
    );
});
AboutApp.displayName = 'AboutApp';
