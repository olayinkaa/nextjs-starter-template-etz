import Container from "@/components/shared/container";

interface IDashboardLayout {
    header: React.ReactNode;
    statistic: React.ReactNode;
    table: React.ReactNode;
}

export default function DashboardLayout({ header, statistic, table }: IDashboardLayout) {
    return (
        <div>
            <Container className="px-0">
                {header}
                {statistic}
                {table}
            </Container>
        </div>
    );
}
