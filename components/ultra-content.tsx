import { Button } from "@/components/ui/button"
import { Package, Truck, CheckCircle, Clock, Plus, ArrowRight, Search, BarChart3, Wallet, Sparkles } from "lucide-react"
import { UltraShipmentTracker } from "@/components/ultra-shipment-tracker"
import { UltraQuickActions } from "@/components/ultra-quick-actions"
import { UltraShipmentStatus } from "@/components/ultra-shipment-status"
import { UltraShipmentCard } from "@/components/ultra-shipment-card"
import { UltraWelcomeBanner } from "@/components/ultra-welcome-banner"
import { UltraStatsCard } from "@/components/ultra-stats-card"
import { UltraPricingTable } from "@/components/ultra-pricing-table"
import { UltraPromotionCard } from "@/components/ultra-promotion-card"

export function UltraContent() {
  return (
    <div className="space-y-8 pb-10">
      <UltraWelcomeBanner />

      <div className="grid gap-6 md:grid-cols-4">
        <UltraShipmentStatus title="تم التوصيل" count={76} icon={CheckCircle} color="success" />
        <UltraShipmentStatus title="جاري التوصيل" count={2} icon={Truck} color="warning" />
        <UltraShipmentStatus title="����اهز للشحن" count={1} icon={Package} color="info" />
        <UltraShipmentStatus title="قيد المعالجة" count={3} icon={Clock} color="secondary" />
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <div className="luxury-card glass-morphism">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                  شحناتي النشطة
                </h3>
                <p className="text-sm text-muted-foreground">متابعة شحناتك الحالية</p>
              </div>
              <Button variant="ghost" className="gap-1 text-primary hover:bg-primary/5 rounded-xl">
                <span>عرض الكل</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="relative mb-6 flex items-center rounded-xl glass-morphism px-3 py-2 focus-within:ring-2 focus-within:ring-primary/30">
              <Search className="h-5 w-5 text-muted-foreground" />
              <input
                type="search"
                placeholder="البحث برقم الشحنة..."
                className="flex-1 border-none bg-transparent px-2 py-1 focus:outline-none"
              />
              <Button variant="ghost" size="sm" className="rounded-lg text-xs text-primary hover:bg-primary/5">
                بحث متقدم
              </Button>
            </div>

            <div className="space-y-4">
              <UltraShipmentCard
                id={1001}
                from="الرياض"
                to="جدة"
                status="delivered"
                date="15 أبريل 2025"
                time="10:30 ص"
                priority="عادي"
              />
              <UltraShipmentCard
                id={1002}
                from="الدمام"
                to="الرياض"
                status="transit"
                date="16 أبريل 2025"
                time="2:45 م"
                priority="سريع"
              />
              <UltraShipmentCard
                id={1003}
                from="جدة"
                to="مكة"
                status="processing"
                date="17 أبريل 2025"
                time="9:15 ص"
                priority="فائق السرعة"
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <UltraStatsCard
              title="إحصائيات الشحن"
              icon={BarChart3}
              color="info"
              stats={[
                { label: "إجمالي الشحنات", value: "82" },
                { label: "متوسط وقت التوصيل", value: "1.8 يوم" },
                { label: "معدل رضا العملاء", value: "96%" },
              ]}
            />

            <UltraStatsCard
              title="المحفظة الإلكترونية"
              icon={Wallet}
              color="success"
              stats={[
                { label: "الرصيد الحالي", value: "76.02 ريال" },
                { label: "آخر معاملة", value: "منذ 3 ساعات" },
                { label: "الخصم المتاح", value: "15%" },
              ]}
              action={{
                label: "شحن المحفظة",
                onClick: () => {},
              }}
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="luxury-card animated-bg text-white">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-xl bg-white/20 p-2">
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">إنشاء شحنة</h3>
                <p className="text-sm text-white/80">أنشئ شحنة جديدة بخطوات بسيطة</p>
              </div>
            </div>
            <Button className="w-full bg-white text-primary hover:bg-white/90 luxury-button">
              <Plus className="mr-2 h-5 w-5" />
              <span>إنشاء شحنة جديدة</span>
            </Button>
          </div>

          <UltraQuickActions />

          <UltraPromotionCard />

          <div className="luxury-card glass-morphism">
            <div className="mb-4">
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                تتبع شحنة
              </h3>
              <p className="text-sm text-muted-foreground">أدخل رقم الشحنة لتتبع حالتها</p>
            </div>
            <UltraShipmentTracker />
          </div>
        </div>
      </div>

      <div className="luxury-card glass-morphism">
        <div className="mb-4">
          <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            أسعار الشحن
          </h3>
          <p className="text-sm text-muted-foreground">تعرف على أسعار الشحن بين المدن</p>
        </div>
        <UltraPricingTable />
      </div>
    </div>
  )
}
