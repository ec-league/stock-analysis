export default {
  'GET /api/model/model-file-detail.json': {
    "success": true, "resultCode": "SUCCESS", "resultMsg": "成功", "data": {
      "fileId": 10,
      "name": "sfjlskfjkl",
      "desc": "sdfdfjlk",
      "status": "INIT",
      "createUserName": "",
      "updateUserName": "",
      "content": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\n<PMML xmlns=\"http://www.dmg.org/PMML-4_3\" xmlns:data=\"http://jpmml.org/jpmml-model/InlineTable\" version=\"4.3\">\n\t<Header>\n\t\t<Application name=\"JPMML-XGBoost\" version=\"1.3-SNAPSHOT\"/>\n\t\t<Timestamp>2019-10-07T10:11:08Z</Timestamp>\n\t</Header>\n\t<DataDictionary>\n\t\t<DataField name=\"app_fin_model_a_score_gaia_v2_3\" optype=\"continuous\" dataType=\"integer\"/>\n\t\t<DataField name=\"mortgageloan_repay_actual\" optype=\"continuous\" dataType=\"float\"/>\n\t\t<DataField name=\"app_t2_chuxing_che_youche\" optype=\"continuous\" dataType=\"float\"/>\n\t\t<DataField name=\"v2_p_user_regweek\" optype=\"continuous\" dataType=\"float\"/>\n\t\t<DataField name=\"accfd_now_pay\" optype=\"continuous\" dataType=\"float\"/>\n\t\t<DataField name=\"v_all_query_cnt_2y\" optype=\"continuous\" dataType=\"float\"/>\n\t\t<DataField name=\"v2_r_user_paycftsuccamt_o_payamt_360d\" optype=\"continuous\" dataType=\"float\"/>\n\t\t<DataField name=\"idcellnbankalld7applyorgnumt\" optype=\"continuous\" dataType=\"float\"/>\n\t\t<DataField name=\"idnbankotherloworglowconcernt\" optype=\"continuous\" dataType=\"float\"/>\n\t\t<DataField name=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\" optype=\"continuous\" dataType=\"float\"/>\n\t\t<DataField name=\"ln_limit_normal_sum\" optype=\"continuous\" dataType=\"float\"/>\n\t\t<DataField name=\"app_score_v2_cc_limit_avg_head3_plus_tail3\" optype=\"continuous\" dataType=\"float\"/>\n\t\t<DataField name=\"acc_max_account_active_range_days\" optype=\"continuous\" dataType=\"float\"/>\n\t\t<DataField name=\"unsquare_consume_balance\" optype=\"continuous\" dataType=\"float\"/>\n\t\t<DataField name=\"cc_usrate_avg\" optype=\"continuous\" dataType=\"float\"/>\n\t\t<DataField name=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\" optype=\"continuous\" dataType=\"float\"/>\n\t\t<DataField name=\"add_robust_score_a_b\" optype=\"continuous\" dataType=\"float\"/>\n\t\t<DataField name=\"ln_repay_actual\" optype=\"continuous\" dataType=\"float\"/>\n\t\t<DataField name=\"unsquare_consume_times_avg\" optype=\"continuous\" dataType=\"float\"/>\n\t\t<DataField name=\"app_score_v2_a_bad_abs_top_avg\" optype=\"continuous\" dataType=\"float\"/>\n\t\t<DataField name=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\" optype=\"continuous\" dataType=\"float\"/>\n\t\t<DataField name=\"idcellallallm3applyorgnumt\" optype=\"continuous\" dataType=\"float\"/>\n\t\t<DataField name=\"idnbankloanm1applyorgnumt\" optype=\"continuous\" dataType=\"float\"/>\n\t\t<DataField name=\"ln_amt_mbsloan_unsquare_max\" optype=\"continuous\" dataType=\"float\"/>\n\t\t<DataField name=\"ln_ever_amt_max\" optype=\"continuous\" dataType=\"float\"/>\n\t\t<DataField name=\"add_robust_score_a\" optype=\"continuous\" dataType=\"float\"/>\n\t\t<DataField name=\"acc_max_account_reg_days\" optype=\"continuous\" dataType=\"float\"/>\n\t\t<DataField name=\"wm_add_r_user_wm_add_xiuxianyule_o_total\" optype=\"continuous\" dataType=\"float\"/>\n\t\t<DataField name=\"v2_r_user_paycftsuccamt_o_payamt_180d\" optype=\"continuous\" dataType=\"float\"/>\n\t\t<DataField name=\"idcellnbankallm3applyorgnumt\" optype=\"continuous\" dataType=\"float\"/>\n\t\t<DataField name=\"idcellnbankloanm3applyorgnumt\" optype=\"continuous\" dataType=\"float\"/>\n\t\t<DataField name=\"v_credit_query_cnt_2y\" optype=\"continuous\" dataType=\"float\"/>\n\t\t<DataField name=\"v2_v_user_acc_visit_week_cnt_360d\" optype=\"continuous\" dataType=\"float\"/>\n\t\t<DataField name=\"unsquare_consume_balance_max\" optype=\"continuous\" dataType=\"float\"/>\n\t\t<DataField name=\"qry_times_self_l1st\" optype=\"continuous\" dataType=\"float\"/>\n\t\t<DataField name=\"cc_mob_max_now\" optype=\"continuous\" dataType=\"float\"/>\n\t\t<DataField name=\"acc_avg_account_reg_days\" optype=\"continuous\" dataType=\"float\"/>\n\t\t<DataField name=\"overduehighestmonthlyofloan\" optype=\"continuous\" dataType=\"float\"/>\n\t\t<DataField name=\"idcellnbankp2pm3applyorgnumt\" optype=\"continuous\" dataType=\"float\"/>\n\t\t<DataField name=\"sp_s_sum_user_sp_alipay_pay_succ_amt_6m\" optype=\"continuous\" dataType=\"float\"/>\n\t\t<DataField name=\"cc_usrate_100p_cnt\" optype=\"continuous\" dataType=\"float\"/>\n\t\t<DataField name=\"idnbankallm3applyorgnumt\" optype=\"continuous\" dataType=\"float\"/>\n\t\t<DataField name=\"v2_p_user_regday\" optype=\"continuous\" dataType=\"float\"/>\n\t\t<DataField name=\"ln_amt_l6th_creditloan\" optype=\"continuous\" dataType=\"float\"/>\n\t\t<DataField name=\"creditloan_times_avg\" optype=\"continuous\" dataType=\"float\"/>\n\t\t<DataField name=\"cc_usrate_max\" optype=\"continuous\" dataType=\"float\"/>\n\t\t<DataField name=\"consumerloan_times_avg\" optype=\"continuous\" dataType=\"float\"/>\n\t\t<DataField name=\"idcellnbankp2pd7applyorgnumt\" optype=\"continuous\" dataType=\"float\"/>\n\t\t<DataField name=\"ln_delq_l12m_lvl1p_times_v2\" optype=\"continuous\" dataType=\"float\"/>\n\t\t<DataField name=\"idcellnbankconsumem3applyorgnumt\" optype=\"continuous\" dataType=\"float\"/>\n\t\t<DataField name=\"add_robust_score_a_b_c\" optype=\"continuous\" dataType=\"float\"/>\n\t\t<DataField name=\"add_robust_score_ab\" optype=\"continuous\" dataType=\"float\"/>\n\t\t<DataField name=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\" optype=\"continuous\" dataType=\"float\"/>\n\t\t<DataField name=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\" optype=\"continuous\" dataType=\"float\"/>\n\t\t<DataField name=\"v2_s_max_user_pay_meishi_succ_amt_360d\" optype=\"continuous\" dataType=\"float\"/>\n\t\t<DataField name=\"ln_mob_internet_min_v3\" optype=\"continuous\" dataType=\"float\"/>\n\t</DataDictionary>\n\t<MiningModel functionName=\"regression\" algorithmName=\"XGBoost (GBTree)\" x-mathContext=\"float\">\n\t\t<MiningSchema>\n\t\t\t<MiningField name=\"app_fin_model_a_score_gaia_v2_3\" usageType=\"predicted\"/>\n\t\t\t<MiningField name=\"mortgageloan_repay_actual\"/>\n\t\t\t<MiningField name=\"app_t2_chuxing_che_youche\"/>\n\t\t\t<MiningField name=\"v2_p_user_regweek\"/>\n\t\t\t<MiningField name=\"accfd_now_pay\"/>\n\t\t\t<MiningField name=\"v_all_query_cnt_2y\"/>\n\t\t\t<MiningField name=\"v2_r_user_paycftsuccamt_o_payamt_360d\"/>\n\t\t\t<MiningField name=\"idcellnbankalld7applyorgnumt\"/>\n\t\t\t<MiningField name=\"idnbankotherloworglowconcernt\"/>\n\t\t\t<MiningField name=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\"/>\n\t\t\t<MiningField name=\"ln_limit_normal_sum\"/>\n\t\t\t<MiningField name=\"app_score_v2_cc_limit_avg_head3_plus_tail3\"/>\n\t\t\t<MiningField name=\"acc_max_account_active_range_days\"/>\n\t\t\t<MiningField name=\"unsquare_consume_balance\"/>\n\t\t\t<MiningField name=\"cc_usrate_avg\"/>\n\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\"/>\n\t\t\t<MiningField name=\"add_robust_score_a_b\"/>\n\t\t\t<MiningField name=\"ln_repay_actual\"/>\n\t\t\t<MiningField name=\"unsquare_consume_times_avg\"/>\n\t\t\t<MiningField name=\"app_score_v2_a_bad_abs_top_avg\"/>\n\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\"/>\n\t\t\t<MiningField name=\"idcellallallm3applyorgnumt\"/>\n\t\t\t<MiningField name=\"idnbankloanm1applyorgnumt\"/>\n\t\t\t<MiningField name=\"ln_amt_mbsloan_unsquare_max\"/>\n\t\t\t<MiningField name=\"ln_ever_amt_max\"/>\n\t\t\t<MiningField name=\"add_robust_score_a\"/>\n\t\t\t<MiningField name=\"acc_max_account_reg_days\"/>\n\t\t\t<MiningField name=\"wm_add_r_user_wm_add_xiuxianyule_o_total\"/>\n\t\t\t<MiningField name=\"v2_r_user_paycftsuccamt_o_payamt_180d\"/>\n\t\t\t<MiningField name=\"idcellnbankallm3applyorgnumt\"/>\n\t\t\t<MiningField name=\"idcellnbankloanm3applyorgnumt\"/>\n\t\t\t<MiningField name=\"v_credit_query_cnt_2y\"/>\n\t\t\t<MiningField name=\"v2_v_user_acc_visit_week_cnt_360d\"/>\n\t\t\t<MiningField name=\"unsquare_consume_balance_max\"/>\n\t\t\t<MiningField name=\"qry_times_self_l1st\"/>\n\t\t\t<MiningField name=\"cc_mob_max_now\"/>\n\t\t\t<MiningField name=\"acc_avg_account_reg_days\"/>\n\t\t\t<MiningField name=\"overduehighestmonthlyofloan\"/>\n\t\t\t<MiningField name=\"idcellnbankp2pm3applyorgnumt\"/>\n\t\t\t<MiningField name=\"sp_s_sum_user_sp_alipay_pay_succ_amt_6m\"/>\n\t\t\t<MiningField name=\"cc_usrate_100p_cnt\"/>\n\t\t\t<MiningField name=\"idnbankallm3applyorgnumt\"/>\n\t\t\t<MiningField name=\"v2_p_user_regday\"/>\n\t\t\t<MiningField name=\"ln_amt_l6th_creditloan\"/>\n\t\t\t<MiningField name=\"creditloan_times_avg\"/>\n\t\t\t<MiningField name=\"cc_usrate_max\"/>\n\t\t\t<MiningField name=\"consumerloan_times_avg\"/>\n\t\t\t<MiningField name=\"idcellnbankp2pd7applyorgnumt\"/>\n\t\t\t<MiningField name=\"ln_delq_l12m_lvl1p_times_v2\"/>\n\t\t\t<MiningField name=\"idcellnbankconsumem3applyorgnumt\"/>\n\t\t\t<MiningField name=\"add_robust_score_a_b_c\"/>\n\t\t\t<MiningField name=\"add_robust_score_ab\"/>\n\t\t\t<MiningField name=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\"/>\n\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\"/>\n\t\t\t<MiningField name=\"v2_s_max_user_pay_meishi_succ_amt_360d\"/>\n\t\t\t<MiningField name=\"ln_mob_internet_min_v3\"/>\n\t\t</MiningSchema>\n\t\t<Segmentation multipleModelMethod=\"modelChain\" x-missingPredictionTreatment=\"returnMissing\">\n\t\t\t<Segment id=\"1\">\n\t\t\t\t<True/>\n\t\t\t\t<MiningModel functionName=\"regression\" x-mathContext=\"float\">\n\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t<MiningField name=\"mortgageloan_repay_actual\"/>\n\t\t\t\t\t\t<MiningField name=\"app_t2_chuxing_che_youche\"/>\n\t\t\t\t\t\t<MiningField name=\"v2_p_user_regweek\"/>\n\t\t\t\t\t\t<MiningField name=\"accfd_now_pay\"/>\n\t\t\t\t\t\t<MiningField name=\"v_all_query_cnt_2y\"/>\n\t\t\t\t\t\t<MiningField name=\"v2_r_user_paycftsuccamt_o_payamt_360d\"/>\n\t\t\t\t\t\t<MiningField name=\"idcellnbankalld7applyorgnumt\"/>\n\t\t\t\t\t\t<MiningField name=\"idnbankotherloworglowconcernt\"/>\n\t\t\t\t\t\t<MiningField name=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\"/>\n\t\t\t\t\t\t<MiningField name=\"ln_limit_normal_sum\"/>\n\t\t\t\t\t\t<MiningField name=\"app_score_v2_cc_limit_avg_head3_plus_tail3\"/>\n\t\t\t\t\t\t<MiningField name=\"acc_max_account_active_range_days\"/>\n\t\t\t\t\t\t<MiningField name=\"unsquare_consume_balance\"/>\n\t\t\t\t\t\t<MiningField name=\"cc_usrate_avg\"/>\n\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\"/>\n\t\t\t\t\t\t<MiningField name=\"add_robust_score_a_b\"/>\n\t\t\t\t\t\t<MiningField name=\"ln_repay_actual\"/>\n\t\t\t\t\t\t<MiningField name=\"unsquare_consume_times_avg\"/>\n\t\t\t\t\t\t<MiningField name=\"app_score_v2_a_bad_abs_top_avg\"/>\n\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\"/>\n\t\t\t\t\t\t<MiningField name=\"idcellallallm3applyorgnumt\"/>\n\t\t\t\t\t\t<MiningField name=\"idnbankloanm1applyorgnumt\"/>\n\t\t\t\t\t\t<MiningField name=\"ln_amt_mbsloan_unsquare_max\"/>\n\t\t\t\t\t\t<MiningField name=\"ln_ever_amt_max\"/>\n\t\t\t\t\t\t<MiningField name=\"add_robust_score_a\"/>\n\t\t\t\t\t\t<MiningField name=\"acc_max_account_reg_days\"/>\n\t\t\t\t\t\t<MiningField name=\"wm_add_r_user_wm_add_xiuxianyule_o_total\"/>\n\t\t\t\t\t\t<MiningField name=\"v2_r_user_paycftsuccamt_o_payamt_180d\"/>\n\t\t\t\t\t\t<MiningField name=\"idcellnbankallm3applyorgnumt\"/>\n\t\t\t\t\t\t<MiningField name=\"idcellnbankloanm3applyorgnumt\"/>\n\t\t\t\t\t\t<MiningField name=\"v_credit_query_cnt_2y\"/>\n\t\t\t\t\t\t<MiningField name=\"v2_v_user_acc_visit_week_cnt_360d\"/>\n\t\t\t\t\t\t<MiningField name=\"unsquare_consume_balance_max\"/>\n\t\t\t\t\t\t<MiningField name=\"qry_times_self_l1st\"/>\n\t\t\t\t\t\t<MiningField name=\"cc_mob_max_now\"/>\n\t\t\t\t\t\t<MiningField name=\"acc_avg_account_reg_days\"/>\n\t\t\t\t\t\t<MiningField name=\"overduehighestmonthlyofloan\"/>\n\t\t\t\t\t\t<MiningField name=\"idcellnbankp2pm3applyorgnumt\"/>\n\t\t\t\t\t\t<MiningField name=\"sp_s_sum_user_sp_alipay_pay_succ_amt_6m\"/>\n\t\t\t\t\t\t<MiningField name=\"cc_usrate_100p_cnt\"/>\n\t\t\t\t\t\t<MiningField name=\"idnbankallm3applyorgnumt\"/>\n\t\t\t\t\t\t<MiningField name=\"v2_p_user_regday\"/>\n\t\t\t\t\t\t<MiningField name=\"ln_amt_l6th_creditloan\"/>\n\t\t\t\t\t\t<MiningField name=\"creditloan_times_avg\"/>\n\t\t\t\t\t\t<MiningField name=\"cc_usrate_max\"/>\n\t\t\t\t\t\t<MiningField name=\"consumerloan_times_avg\"/>\n\t\t\t\t\t\t<MiningField name=\"idcellnbankp2pd7applyorgnumt\"/>\n\t\t\t\t\t\t<MiningField name=\"ln_delq_l12m_lvl1p_times_v2\"/>\n\t\t\t\t\t\t<MiningField name=\"idcellnbankconsumem3applyorgnumt\"/>\n\t\t\t\t\t\t<MiningField name=\"add_robust_score_a_b_c\"/>\n\t\t\t\t\t\t<MiningField name=\"add_robust_score_ab\"/>\n\t\t\t\t\t\t<MiningField name=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\"/>\n\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\"/>\n\t\t\t\t\t\t<MiningField name=\"v2_s_max_user_pay_meishi_succ_amt_360d\"/>\n\t\t\t\t\t\t<MiningField name=\"ln_mob_internet_min_v3\"/>\n\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t<Output>\n\t\t\t\t\t\t<OutputField name=\"xgbValue\" optype=\"continuous\" dataType=\"float\" isFinalResult=\"false\"/>\n\t\t\t\t\t</Output>\n\t\t\t\t\t<Segmentation multipleModelMethod=\"sum\">\n\t\t\t\t\t\t<Segment id=\"1\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_all_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"acc_max_account_active_range_days\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankallm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idnbankallm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_p_user_regday\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_ab\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.23945513\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.2236566\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankallm3applyorgnumt\" operator=\"greaterOrEqual\" value=\"3.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.19179004\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"greaterOrEqual\" value=\"0.955\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.2236566\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_max_account_active_range_days\" operator=\"greaterOrEqual\" value=\"754.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.21516597\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\" operator=\"greaterOrEqual\" value=\"0.08882314\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.21172276\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankallm3applyorgnumt\" operator=\"lessThan\" value=\"6.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.2320185\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_max_account_active_range_days\" operator=\"greaterOrEqual\" value=\"821.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.22783755\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idnbankallm3applyorgnumt\" operator=\"lessThan\" value=\"4.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.2320185\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_all_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"8.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.23945513\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_ab\" operator=\"greaterOrEqual\" value=\"4.2514\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.23647043\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\" operator=\"greaterOrEqual\" value=\"2.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.23647043\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"lessThan\" value=\"0.885\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.24529679\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regday\" operator=\"greaterOrEqual\" value=\"861.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.24173504\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\" operator=\"greaterOrEqual\" value=\"0.09215\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"2\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_p_user_regweek\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_a_b\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"acc_max_account_reg_days\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankallm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_p_user_regday\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.20587733\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.16499995\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankallm3applyorgnumt\" operator=\"greaterOrEqual\" value=\"3.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.2015585\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_max_account_reg_days\" operator=\"greaterOrEqual\" value=\"870.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.2015585\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankallm3applyorgnumt\" operator=\"lessThan\" value=\"5.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.20587733\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\" operator=\"lessThan\" value=\"0.09795\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.19723967\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_avg\" operator=\"greaterOrEqual\" value=\"0.335\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.19723967\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankallm3applyorgnumt\" operator=\"lessThan\" value=\"6.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.18694732\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regweek\" operator=\"lessThan\" value=\"84.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.1857749\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\" operator=\"lessThan\" value=\"0.0736\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.21220946\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankallm3applyorgnumt\" operator=\"lessThan\" value=\"1.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.21436632\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regday\" operator=\"greaterOrEqual\" value=\"746.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.21774974\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\" operator=\"lessThan\" value=\"0.09235\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.21220946\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a_b\" operator=\"greaterOrEqual\" value=\"3.88055\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.2089588\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\" operator=\"greaterOrEqual\" value=\"2.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.2089588\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regweek\" operator=\"greaterOrEqual\" value=\"151.5\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"3\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"acc_max_account_reg_days\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankallm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_credit_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_a_b_c\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_mob_internet_min_v3\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.19315062\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.15062967\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankallm3applyorgnumt\" operator=\"greaterOrEqual\" value=\"2.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.1839414\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankallm3applyorgnumt\" operator=\"lessThan\" value=\"5.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.18892244\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_max_account_reg_days\" operator=\"greaterOrEqual\" value=\"788.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.1839414\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\" operator=\"greaterOrEqual\" value=\"0.10975\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.17922291\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"greaterOrEqual\" value=\"0.895\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.17922291\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a_b_c\" operator=\"greaterOrEqual\" value=\"5.5362997\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.17254986\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\" operator=\"greaterOrEqual\" value=\"0.037998747\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.16967845\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_mob_internet_min_v3\" operator=\"lessThan\" value=\"5.045\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.19917518\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_max_account_reg_days\" operator=\"greaterOrEqual\" value=\"732.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.19589618\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_credit_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"3.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.19315062\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\" operator=\"greaterOrEqual\" value=\"0.04085\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.19589618\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\" operator=\"greaterOrEqual\" value=\"0.025594234\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.18892244\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_credit_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"2.5\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"4\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_all_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_a_b\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_a_bad_abs_top_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_a\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_credit_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_p_user_regday\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankconsumem3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.17799276\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.16712159\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankconsumem3applyorgnumt\" operator=\"greaterOrEqual\" value=\"1.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.15711085\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_credit_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"6.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.16016409\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\" operator=\"lessThan\" value=\"0.08105\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.16712159\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a_b\" operator=\"greaterOrEqual\" value=\"4.00525\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.13699824\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_a_bad_abs_top_avg\" operator=\"lessThan\" value=\"-0.0275\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.1739912\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a_b\" operator=\"greaterOrEqual\" value=\"3.34845\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.1705564\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_a_bad_abs_top_avg\" operator=\"lessThan\" value=\"-0.0655\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.1739912\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_all_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"11.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.17599198\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regday\" operator=\"greaterOrEqual\" value=\"1076.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.17799276\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\" operator=\"lessThan\" value=\"0.095750004\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.18035638\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regday\" operator=\"greaterOrEqual\" value=\"725.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.1838881\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\" operator=\"lessThan\" value=\"0.08825\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.18035638\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a\" operator=\"greaterOrEqual\" value=\"2.6412501\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"5\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_all_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_a_bad_abs_top_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"acc_max_account_reg_days\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"qry_times_self_l1st\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idnbankallm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_p_user_regday\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_ab\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.16355634\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.15201035\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idnbankallm3applyorgnumt\" operator=\"greaterOrEqual\" value=\"3.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.16022958\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_ab\" operator=\"greaterOrEqual\" value=\"3.5653\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.15611997\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\" operator=\"greaterOrEqual\" value=\"2.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.15201035\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\" operator=\"lessThan\" value=\"0.9736842\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.15611997\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_a_bad_abs_top_avg\" operator=\"lessThan\" value=\"0.0045\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.1111256\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"greaterOrEqual\" value=\"0.895\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.14139299\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"qry_times_self_l1st\" operator=\"lessThan\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.14545661\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_max_account_reg_days\" operator=\"lessThan\" value=\"593.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.16926448\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_max_account_reg_days\" operator=\"greaterOrEqual\" value=\"861.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.1732708\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\" operator=\"lessThan\" value=\"0.09275\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.16926448\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_all_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"8.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.16688311\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\" operator=\"lessThan\" value=\"0.9428104\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.16022958\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_all_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"8.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.16355634\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"lessThan\" value=\"0.915\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.16688311\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regday\" operator=\"greaterOrEqual\" value=\"443.5\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"6\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_p_user_regweek\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_a_b\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"acc_max_account_reg_days\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankallm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_s_max_user_pay_meishi_succ_amt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_mob_internet_min_v3\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.1540207\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.14285049\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankallm3applyorgnumt\" operator=\"greaterOrEqual\" value=\"3.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.11577306\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"greaterOrEqual\" value=\"0.925\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.14285049\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\" operator=\"lessThan\" value=\"0.08315\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.13400203\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_s_max_user_pay_meishi_succ_amt_360d\" operator=\"lessThan\" value=\"11675.0\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.13302657\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_mob_internet_min_v3\" operator=\"lessThan\" value=\"2.855\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.15065145\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_max_account_reg_days\" operator=\"greaterOrEqual\" value=\"773.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.14675097\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\" operator=\"greaterOrEqual\" value=\"0.17705\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.16429599\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a_b\" operator=\"greaterOrEqual\" value=\"3.88055\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.16023302\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\" operator=\"greaterOrEqual\" value=\"2.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.15768264\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\" operator=\"lessThan\" value=\"0.9428104\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.16023302\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankallm3applyorgnumt\" operator=\"greaterOrEqual\" value=\"1.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.15065145\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"greaterOrEqual\" value=\"0.885\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.1540207\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankallm3applyorgnumt\" operator=\"lessThan\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.15768264\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regweek\" operator=\"greaterOrEqual\" value=\"76.5\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"7\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_all_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"acc_max_account_active_range_days\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_repay_actual\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_a_bad_abs_top_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_a\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_credit_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankp2pm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_p_user_regday\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_ab\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.14855516\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.11634897\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankp2pm3applyorgnumt\" operator=\"greaterOrEqual\" value=\"1.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.14061134\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_max_account_active_range_days\" operator=\"greaterOrEqual\" value=\"679.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.13498688\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_credit_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"5.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.12792677\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_ab\" operator=\"lessThan\" value=\"6.94965\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.13498688\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_a_bad_abs_top_avg\" operator=\"lessThan\" value=\"-0.1505\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.11623403\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"greaterOrEqual\" value=\"0.995\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.090203926\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\" operator=\"greaterOrEqual\" value=\"0.0473\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.12792677\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_repay_actual\" operator=\"greaterOrEqual\" value=\"540.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.14458326\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_all_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"10.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.14855516\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regday\" operator=\"greaterOrEqual\" value=\"1073.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.14458326\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_a_bad_abs_top_avg\" operator=\"lessThan\" value=\"0.0035\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.14061134\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\" operator=\"greaterOrEqual\" value=\"0.03765\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.1561641\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regday\" operator=\"greaterOrEqual\" value=\"726.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.15159045\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\" operator=\"greaterOrEqual\" value=\"0.10615\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.15159045\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a\" operator=\"greaterOrEqual\" value=\"2.9089499\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"8\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_repay_actual\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_a_bad_abs_top_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_a\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"acc_max_account_reg_days\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankallm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_credit_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_p_user_regday\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.13194951\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.122156724\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankallm3applyorgnumt\" operator=\"greaterOrEqual\" value=\"4.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.11267845\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_a_bad_abs_top_avg\" operator=\"lessThan\" value=\"-0.0655\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.051773377\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regday\" operator=\"lessThan\" value=\"536.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.09036953\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_repay_actual\" operator=\"greaterOrEqual\" value=\"358.0\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.09297986\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\" operator=\"greaterOrEqual\" value=\"0.020305092\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.13194951\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_max_account_reg_days\" operator=\"greaterOrEqual\" value=\"880.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.122156724\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\" operator=\"greaterOrEqual\" value=\"0.12865001\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.11267845\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"greaterOrEqual\" value=\"0.865\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.1455105\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankallm3applyorgnumt\" operator=\"lessThan\" value=\"1.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.14223503\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\" operator=\"greaterOrEqual\" value=\"0.09915\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.1455105\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a\" operator=\"greaterOrEqual\" value=\"3.1574001\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.15082781\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_max_account_reg_days\" operator=\"greaterOrEqual\" value=\"861.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.14223503\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_max_account_reg_days\" operator=\"greaterOrEqual\" value=\"833.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.13661948\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\" operator=\"greaterOrEqual\" value=\"0.10615\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.13661948\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_credit_query_cnt_2y\" operator=\"lessThan\" value=\"2.5\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"9\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_p_user_regweek\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"acc_max_account_active_range_days\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_a_bad_abs_top_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankallm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_a_b_c\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_ab\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_mob_internet_min_v3\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.13112038\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.10115246\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankallm3applyorgnumt\" operator=\"greaterOrEqual\" value=\"2.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.12434302\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankallm3applyorgnumt\" operator=\"lessThan\" value=\"5.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.12434302\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\" operator=\"lessThan\" value=\"0.09625\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.13112038\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_max_account_active_range_days\" operator=\"greaterOrEqual\" value=\"631.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.11778476\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"greaterOrEqual\" value=\"0.885\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.06143878\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_a_bad_abs_top_avg\" operator=\"lessThan\" value=\"-0.1385\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.09283237\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_mob_internet_min_v3\" operator=\"lessThan\" value=\"4.63\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.11778476\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_ab\" operator=\"greaterOrEqual\" value=\"3.2258\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.1404751\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regweek\" operator=\"greaterOrEqual\" value=\"102.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.14164308\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\" operator=\"lessThan\" value=\"0.09445\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.1462604\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a_b_c\" operator=\"greaterOrEqual\" value=\"6.4819\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.13731113\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\" operator=\"lessThan\" value=\"0.9393382\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.13419126\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\" operator=\"lessThan\" value=\"0.05475\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.13731113\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a_b_c\" operator=\"greaterOrEqual\" value=\"3.55355\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"10\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_all_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_repay_actual\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"acc_max_account_reg_days\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankallm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_100p_cnt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idnbankallm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_p_user_regday\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_ab\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_mob_internet_min_v3\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.13211095\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.062025324\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankallm3applyorgnumt\" operator=\"greaterOrEqual\" value=\"3.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.11449948\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\" operator=\"lessThan\" value=\"0.13354999\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.122496575\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_max_account_reg_days\" operator=\"greaterOrEqual\" value=\"801.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.11449948\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_100p_cnt\" operator=\"greaterOrEqual\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.10746308\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\" operator=\"lessThan\" value=\"0.8208556\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.09394984\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_mob_internet_min_v3\" operator=\"lessThan\" value=\"3.92\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.10746308\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idnbankallm3applyorgnumt\" operator=\"lessThan\" value=\"6.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.09142928\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idnbankallm3applyorgnumt\" operator=\"lessThan\" value=\"5.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.122496575\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_all_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"8.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.13211095\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_max_account_reg_days\" operator=\"greaterOrEqual\" value=\"869.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.12714687\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\" operator=\"greaterOrEqual\" value=\"0.11625\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.12714687\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_repay_actual\" operator=\"greaterOrEqual\" value=\"3877.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.14157769\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regday\" operator=\"greaterOrEqual\" value=\"939.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.13595302\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\" operator=\"greaterOrEqual\" value=\"0.092250004\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.13595302\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_ab\" operator=\"greaterOrEqual\" value=\"5.2536\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"11\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_p_user_regweek\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_all_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_a_b\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_repay_actual\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_a\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankallm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_credit_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idnbankallm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_s_max_user_pay_meishi_succ_amt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_mob_internet_min_v3\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.1198431\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.030455075\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankallm3applyorgnumt\" operator=\"greaterOrEqual\" value=\"2.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.11331338\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idnbankallm3applyorgnumt\" operator=\"lessThan\" value=\"5.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.11331338\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\" operator=\"lessThan\" value=\"0.04895\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.1198431\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a\" operator=\"greaterOrEqual\" value=\"1.57875\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.10474598\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"greaterOrEqual\" value=\"0.895\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.10474598\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\" operator=\"lessThan\" value=\"0.13475001\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.08869377\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_s_max_user_pay_meishi_succ_amt_360d\" operator=\"lessThan\" value=\"11765.0\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.080678955\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_mob_internet_min_v3\" operator=\"lessThan\" value=\"13.145\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.12738799\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\" operator=\"lessThan\" value=\"0.09675\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.13838099\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a_b\" operator=\"greaterOrEqual\" value=\"4.3134003\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.132107\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_credit_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"3.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.13193244\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regweek\" operator=\"greaterOrEqual\" value=\"147.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.12738799\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regweek\" operator=\"greaterOrEqual\" value=\"143.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.12361555\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_all_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"12.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.12361555\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_repay_actual\" operator=\"greaterOrEqual\" value=\"3456.5\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"12\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_a_b\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_a_bad_abs_top_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"acc_max_account_reg_days\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankallm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_credit_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_p_user_regday\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_a_b_c\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.11940153\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.104106024\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankallm3applyorgnumt\" operator=\"greaterOrEqual\" value=\"2.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.07199088\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"greaterOrEqual\" value=\"0.955\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.104106024\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a_b\" operator=\"greaterOrEqual\" value=\"4.00525\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.094087064\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\" operator=\"greaterOrEqual\" value=\"0.053079285\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.09348197\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankallm3applyorgnumt\" operator=\"lessThan\" value=\"4.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.11505995\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_max_account_reg_days\" operator=\"greaterOrEqual\" value=\"775.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.10958299\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_a_bad_abs_top_avg\" operator=\"lessThan\" value=\"-0.0535\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.10958299\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_a_bad_abs_top_avg\" operator=\"greaterOrEqual\" value=\"0.13749999\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.12914425\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regday\" operator=\"greaterOrEqual\" value=\"852.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.1237431\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_credit_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"3.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.12814248\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a_b\" operator=\"greaterOrEqual\" value=\"5.33075\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.13514304\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\" operator=\"lessThan\" value=\"0.013318552\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.11940153\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\" operator=\"lessThan\" value=\"0.021845993\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.1237431\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a_b_c\" operator=\"greaterOrEqual\" value=\"4.4464\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.11505995\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_credit_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"2.5\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"13\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_p_user_regweek\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_a_b\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_a\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankallm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_credit_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"acc_avg_account_reg_days\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"consumerloan_times_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_ab\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_s_max_user_pay_meishi_succ_amt_360d\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.11173685\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.09694737\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankallm3applyorgnumt\" operator=\"greaterOrEqual\" value=\"3.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.04348997\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_credit_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"2.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.09694737\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\" operator=\"lessThan\" value=\"0.13354999\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.08214621\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_s_max_user_pay_meishi_succ_amt_360d\" operator=\"lessThan\" value=\"11680.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.07744491\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"consumerloan_times_avg\" operator=\"lessThan\" value=\"15.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.10650504\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a_b\" operator=\"greaterOrEqual\" value=\"3.30405\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.101726204\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_avg_account_reg_days\" operator=\"greaterOrEqual\" value=\"600.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.12234334\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regweek\" operator=\"greaterOrEqual\" value=\"121.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.12234334\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankallm3applyorgnumt\" operator=\"lessThan\" value=\"1.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.12985745\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\" operator=\"lessThan\" value=\"0.09235\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.11750817\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_credit_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"2.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.10650504\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_credit_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"4.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.11173685\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_ab\" operator=\"greaterOrEqual\" value=\"6.9352503\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.11750817\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a\" operator=\"greaterOrEqual\" value=\"1.7768\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"14\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_p_user_regweek\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_all_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"acc_max_account_active_range_days\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_a_b\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_repay_actual\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_a_bad_abs_top_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankallm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"creditloan_times_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_max\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.10498975\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.09588821\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankallm3applyorgnumt\" operator=\"greaterOrEqual\" value=\"2.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.08103284\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_a_bad_abs_top_avg\" operator=\"lessThan\" value=\"-0.0805\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.030223887\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"greaterOrEqual\" value=\"0.985\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.06266493\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"creditloan_times_avg\" operator=\"lessThan\" value=\"10.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.0635077\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_a_bad_abs_top_avg\" operator=\"lessThan\" value=\"-0.3885\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.09588821\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\" operator=\"lessThan\" value=\"0.04995\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.10498975\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_max_account_active_range_days\" operator=\"greaterOrEqual\" value=\"631.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.08103284\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"greaterOrEqual\" value=\"0.905\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.119038835\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regweek\" operator=\"greaterOrEqual\" value=\"102.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.11365697\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_all_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"8.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.119038835\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a_b\" operator=\"greaterOrEqual\" value=\"5.33075\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.12697954\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\" operator=\"lessThan\" value=\"0.08115\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.10932336\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\" operator=\"lessThan\" value=\"0.03795\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.11365697\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a_b\" operator=\"greaterOrEqual\" value=\"2.79685\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.10932336\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_repay_actual\" operator=\"greaterOrEqual\" value=\"3716.5\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"15\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_repay_actual\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"acc_max_account_reg_days\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankallm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_credit_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_v_user_acc_visit_week_cnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_a_b_c\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_mob_internet_min_v3\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.10478182\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.03773462\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankallm3applyorgnumt\" operator=\"greaterOrEqual\" value=\"2.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.08203352\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankallm3applyorgnumt\" operator=\"lessThan\" value=\"5.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.100766085\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_max_account_reg_days\" operator=\"greaterOrEqual\" value=\"869.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.09152295\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\" operator=\"greaterOrEqual\" value=\"0.15935001\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.09152295\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_credit_query_cnt_2y\" operator=\"lessThan\" value=\"2.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.08203352\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\" operator=\"lessThan\" value=\"0.05625\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.06866165\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"greaterOrEqual\" value=\"0.985\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.06822092\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_mob_internet_min_v3\" operator=\"lessThan\" value=\"2.63\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.12415845\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_max_account_reg_days\" operator=\"greaterOrEqual\" value=\"718.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.10879755\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_credit_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"3.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.115743294\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a_b_c\" operator=\"greaterOrEqual\" value=\"6.4396\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.115743294\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\" operator=\"greaterOrEqual\" value=\"0.027192399\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.100766085\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_credit_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"2.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.10478182\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_repay_actual\" operator=\"greaterOrEqual\" value=\"6889.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.10879755\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_v_user_acc_visit_week_cnt_360d\" operator=\"greaterOrEqual\" value=\"11.5\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"16\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_p_user_regweek\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_a_bad_abs_top_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"acc_max_account_reg_days\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankallm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_credit_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"qry_times_self_l1st\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_p_user_regday\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_ab\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.08351548\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.107896745\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankallm3applyorgnumt\" operator=\"lessThan\" value=\"2.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.09620221\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_credit_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"3.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.107896745\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regday\" operator=\"greaterOrEqual\" value=\"1083.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.10204948\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\" operator=\"greaterOrEqual\" value=\"0.11395\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.10204948\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_avg\" operator=\"lessThan\" value=\"0.45499998\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.12128941\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regweek\" operator=\"greaterOrEqual\" value=\"102.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.11310074\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\" operator=\"greaterOrEqual\" value=\"0.0951\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.11310074\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_a_bad_abs_top_avg\" operator=\"greaterOrEqual\" value=\"0.2665\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.013082711\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"greaterOrEqual\" value=\"0.925\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.08351548\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_ab\" operator=\"greaterOrEqual\" value=\"3.98635\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.071533404\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\" operator=\"greaterOrEqual\" value=\"2.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.06326161\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"qry_times_self_l1st\" operator=\"lessThan\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.09620221\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_max_account_reg_days\" operator=\"greaterOrEqual\" value=\"775.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.089858845\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\" operator=\"greaterOrEqual\" value=\"0.18055001\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.089858845\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_a_bad_abs_top_avg\" operator=\"greaterOrEqual\" value=\"0.13749999\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"17\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_p_user_regweek\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_repay_actual\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_a_bad_abs_top_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"acc_max_account_reg_days\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankallm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_credit_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"creditloan_times_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.09756363\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.072443396\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankallm3applyorgnumt\" operator=\"greaterOrEqual\" value=\"3.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.031239515\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_a_bad_abs_top_avg\" operator=\"lessThan\" value=\"-0.1095\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.02790948\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regweek\" operator=\"lessThan\" value=\"76.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.027345812\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"greaterOrEqual\" value=\"0.995\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.05850753\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"creditloan_times_avg\" operator=\"lessThan\" value=\"10.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.072443396\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\" operator=\"lessThan\" value=\"0.09915\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.08732837\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_max_account_reg_days\" operator=\"greaterOrEqual\" value=\"861.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.05850753\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_credit_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"2.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.10451029\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_max_account_reg_days\" operator=\"greaterOrEqual\" value=\"719.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.11663789\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\" operator=\"lessThan\" value=\"0.09675\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.1049061\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_credit_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"3.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.09756363\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\" operator=\"lessThan\" value=\"0.9428104\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.08732837\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\" operator=\"lessThan\" value=\"0.93095237\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.092446\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_repay_actual\" operator=\"greaterOrEqual\" value=\"3311.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.092446\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\" operator=\"greaterOrEqual\" value=\"0.02981899\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"18\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_a_b\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"acc_max_account_reg_days\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankallm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_p_user_regday\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_mob_internet_min_v3\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.093747\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.07124619\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankallm3applyorgnumt\" operator=\"greaterOrEqual\" value=\"2.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.079116076\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a_b\" operator=\"greaterOrEqual\" value=\"3.8758998\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.079116076\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\" operator=\"greaterOrEqual\" value=\"0.015978724\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.07124619\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"greaterOrEqual\" value=\"0.865\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.08698596\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankallm3applyorgnumt\" operator=\"lessThan\" value=\"6.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.026582425\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"greaterOrEqual\" value=\"0.895\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.056456096\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_mob_internet_min_v3\" operator=\"lessThan\" value=\"3.335\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.05828396\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_max_account_reg_days\" operator=\"lessThan\" value=\"596.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.1176522\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a_b\" operator=\"greaterOrEqual\" value=\"4.3607\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.100508034\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\" operator=\"greaterOrEqual\" value=\"0.013318552\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.10761044\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regday\" operator=\"greaterOrEqual\" value=\"1270.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.10795325\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"greaterOrEqual\" value=\"0.975\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.093747\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\" operator=\"lessThan\" value=\"0.030250002\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.100508034\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regday\" operator=\"greaterOrEqual\" value=\"519.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.08698596\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\" operator=\"lessThan\" value=\"0.9393382\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"19\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"acc_max_account_active_range_days\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_a_bad_abs_top_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_credit_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"qry_times_self_l1st\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idnbankallm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_p_user_regday\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"creditloan_times_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_a_b_c\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_mob_internet_min_v3\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.07250081\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.09660037\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idnbankallm3applyorgnumt\" operator=\"lessThan\" value=\"1.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.114076085\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regday\" operator=\"greaterOrEqual\" value=\"746.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.09660037\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\" operator=\"greaterOrEqual\" value=\"0.11745\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.103420675\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a_b_c\" operator=\"greaterOrEqual\" value=\"7.1944\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.103420675\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_credit_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"4.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.08728869\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\" operator=\"lessThan\" value=\"0.73746866\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.09194453\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_mob_internet_min_v3\" operator=\"lessThan\" value=\"2.755\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.09194453\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\" operator=\"greaterOrEqual\" value=\"0.019691214\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.027206957\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_a_bad_abs_top_avg\" operator=\"lessThan\" value=\"-0.0605\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.059513494\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"creditloan_times_avg\" operator=\"lessThan\" value=\"10.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.038554773\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_a_bad_abs_top_avg\" operator=\"lessThan\" value=\"-0.3105\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.036047082\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"qry_times_self_l1st\" operator=\"greaterOrEqual\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.07250081\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idnbankallm3applyorgnumt\" operator=\"greaterOrEqual\" value=\"4.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.059513494\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_credit_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"2.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.08728869\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_max_account_active_range_days\" operator=\"greaterOrEqual\" value=\"621.5\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"20\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_a\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankallm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_credit_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"acc_avg_account_reg_days\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_p_user_regday\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"consumerloan_times_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_a_b_c\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_s_max_user_pay_meishi_succ_amt_360d\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.08927823\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.06543468\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankallm3applyorgnumt\" operator=\"greaterOrEqual\" value=\"3.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.010130762\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_credit_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"5.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.057214703\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"consumerloan_times_avg\" operator=\"lessThan\" value=\"11.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.039821986\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\" operator=\"greaterOrEqual\" value=\"0.10386062\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.039821986\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a\" operator=\"greaterOrEqual\" value=\"2.81255\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.07365466\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_avg_account_reg_days\" operator=\"greaterOrEqual\" value=\"601.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.06543468\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\" operator=\"greaterOrEqual\" value=\"0.07762805\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.057214703\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_s_max_user_pay_meishi_succ_amt_360d\" operator=\"lessThan\" value=\"19670.0\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.07365466\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_credit_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"3.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.08927823\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a_b_c\" operator=\"greaterOrEqual\" value=\"6.5369\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.081466444\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\" operator=\"greaterOrEqual\" value=\"3.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.081466444\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_avg\" operator=\"lessThan\" value=\"0.435\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.1112325\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_s_max_user_pay_meishi_succ_amt_360d\" operator=\"greaterOrEqual\" value=\"9899.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.09733438\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\" operator=\"greaterOrEqual\" value=\"0.01479657\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.09733438\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regday\" operator=\"greaterOrEqual\" value=\"1160.5\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"21\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_limit_normal_sum\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"acc_max_account_active_range_days\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_a_b\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"unsquare_consume_times_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_a_bad_abs_top_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankallm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_credit_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_p_user_regday\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.07837059\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.06388113\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankallm3applyorgnumt\" operator=\"greaterOrEqual\" value=\"1.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.04644043\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"greaterOrEqual\" value=\"0.885\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.050500482\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regday\" operator=\"greaterOrEqual\" value=\"1081.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.06388113\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankallm3applyorgnumt\" operator=\"lessThan\" value=\"4.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.008886633\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\" operator=\"greaterOrEqual\" value=\"0.050987914\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.07837059\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_max_account_active_range_days\" operator=\"greaterOrEqual\" value=\"618.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.071125865\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\" operator=\"greaterOrEqual\" value=\"0.07993056\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.071125865\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_a_bad_abs_top_avg\" operator=\"greaterOrEqual\" value=\"0.1415\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.08888872\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\" operator=\"lessThan\" value=\"0.10485\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.10979529\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a_b\" operator=\"greaterOrEqual\" value=\"4.2674503\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.098852366\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"unsquare_consume_times_avg\" operator=\"greaterOrEqual\" value=\"7.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.098852366\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regday\" operator=\"greaterOrEqual\" value=\"1060.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.08888872\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a_b\" operator=\"greaterOrEqual\" value=\"5.0074\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.08362965\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_credit_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"6.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.08362965\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_limit_normal_sum\" operator=\"greaterOrEqual\" value=\"282150.0\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"22\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_all_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_cc_limit_avg_head3_plus_tail3\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"acc_max_account_active_range_days\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_a_bad_abs_top_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankallm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_p_user_regday\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_ab\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_mob_internet_min_v3\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.07660164\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.004115423\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankallm3applyorgnumt\" operator=\"greaterOrEqual\" value=\"4.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.058971703\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_max_account_active_range_days\" operator=\"greaterOrEqual\" value=\"822.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.037143532\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_ab\" operator=\"lessThan\" value=\"4.4586\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.048374884\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\" operator=\"lessThan\" value=\"0.04935\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.048374884\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"greaterOrEqual\" value=\"1.015\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.037143532\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_mob_internet_min_v3\" operator=\"lessThan\" value=\"4.725\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.011015046\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\" operator=\"greaterOrEqual\" value=\"0.012121657\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.0517791\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\" operator=\"greaterOrEqual\" value=\"0.04986188\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.058971703\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_all_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"10.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.07660164\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regday\" operator=\"greaterOrEqual\" value=\"1076.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.06778667\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_a_bad_abs_top_avg\" operator=\"lessThan\" value=\"-0.0385\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.06778667\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"lessThan\" value=\"0.875\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.1023656\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_max_account_active_range_days\" operator=\"greaterOrEqual\" value=\"736.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.08621974\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\" operator=\"greaterOrEqual\" value=\"0.08425\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.08621974\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_cc_limit_avg_head3_plus_tail3\" operator=\"greaterOrEqual\" value=\"0.73950005\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"23\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_p_user_regweek\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_all_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_a_b\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_a_bad_abs_top_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_ever_amt_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankallm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_credit_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"creditloan_times_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_mob_internet_min_v3\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.0038207676\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.069733255\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankallm3applyorgnumt\" operator=\"lessThan\" value=\"1.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.10350291\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regweek\" operator=\"greaterOrEqual\" value=\"102.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.08957876\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\" operator=\"greaterOrEqual\" value=\"0.09905\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.08079459\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\" operator=\"lessThan\" value=\"0.9393382\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.08957876\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_all_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"9.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.07526392\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\" operator=\"lessThan\" value=\"0.0019212456\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.08079459\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a_b\" operator=\"greaterOrEqual\" value=\"3.51105\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.07526392\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_ever_amt_max\" operator=\"greaterOrEqual\" value=\"240500.0\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.069733255\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a_b\" operator=\"greaterOrEqual\" value=\"3.8758998\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.060976036\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\" operator=\"greaterOrEqual\" value=\"2.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.052218817\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_credit_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"2.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.060976036\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_a_bad_abs_top_avg\" operator=\"lessThan\" value=\"0.024500001\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.036988515\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\" operator=\"lessThan\" value=\"0.0454\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.052218817\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"creditloan_times_avg\" operator=\"lessThan\" value=\"13.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.036988515\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_mob_internet_min_v3\" operator=\"lessThan\" value=\"3.045\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"24\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_all_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_cc_limit_avg_head3_plus_tail3\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_repay_actual\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_a\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"acc_max_account_reg_days\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankallm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"qry_times_self_l1st\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_p_user_regday\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_ab\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.07324539\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.021635614\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankallm3applyorgnumt\" operator=\"greaterOrEqual\" value=\"2.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.07779307\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"qry_times_self_l1st\" operator=\"greaterOrEqual\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.020024404\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_max_account_reg_days\" operator=\"greaterOrEqual\" value=\"761.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.017353304\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_all_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"15.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.019099928\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a\" operator=\"greaterOrEqual\" value=\"2.0482502\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.047813285\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\" operator=\"lessThan\" value=\"0.04365\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.060465224\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_ab\" operator=\"greaterOrEqual\" value=\"2.50555\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.047813285\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regday\" operator=\"greaterOrEqual\" value=\"1078.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.08309622\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_max_account_reg_days\" operator=\"greaterOrEqual\" value=\"861.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.101226114\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\" operator=\"lessThan\" value=\"0.09305\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.08493098\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_all_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"6.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.07324539\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\" operator=\"lessThan\" value=\"0.9428104\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.060465224\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\" operator=\"lessThan\" value=\"0.93095237\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.06685531\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_repay_actual\" operator=\"greaterOrEqual\" value=\"3970.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.06685531\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_cc_limit_avg_head3_plus_tail3\" operator=\"lessThan\" value=\"0.3265\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"25\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_all_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_limit_normal_sum\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_a_b\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_repay_actual\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_a_bad_abs_top_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"sp_s_sum_user_sp_alipay_pay_succ_amt_6m\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_100p_cnt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idnbankallm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"consumerloan_times_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.056056947\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.040291637\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_all_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"12.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.02554553\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_a_bad_abs_top_avg\" operator=\"lessThan\" value=\"-0.0515\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.001163444\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\" operator=\"greaterOrEqual\" value=\"0.03555\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.048207205\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_100p_cnt\" operator=\"greaterOrEqual\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.0051792376\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_a_bad_abs_top_avg\" operator=\"lessThan\" value=\"-0.3105\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.02554553\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idnbankallm3applyorgnumt\" operator=\"greaterOrEqual\" value=\"4.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.040291637\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_limit_normal_sum\" operator=\"greaterOrEqual\" value=\"259070.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.056056947\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"consumerloan_times_avg\" operator=\"lessThan\" value=\"14.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.09447075\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a_b\" operator=\"greaterOrEqual\" value=\"3.88055\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.06894711\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\" operator=\"greaterOrEqual\" value=\"2.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.07947612\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"sp_s_sum_user_sp_alipay_pay_succ_amt_6m\" operator=\"greaterOrEqual\" value=\"44.55\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.07947612\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_a_bad_abs_top_avg\" operator=\"lessThan\" value=\"0.1325\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.06250203\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_repay_actual\" operator=\"greaterOrEqual\" value=\"2707.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.06894711\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idnbankallm3applyorgnumt\" operator=\"lessThan\" value=\"3.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.06250203\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_a_bad_abs_top_avg\" operator=\"greaterOrEqual\" value=\"0.15349999\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"26\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_p_user_regweek\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_all_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_a_b\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_repay_actual\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankallm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_v_user_acc_visit_week_cnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"acc_avg_account_reg_days\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"creditloan_times_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_s_max_user_pay_meishi_succ_amt_360d\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.04043028\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.05722963\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankallm3applyorgnumt\" operator=\"lessThan\" value=\"1.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.09624648\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regweek\" operator=\"greaterOrEqual\" value=\"121.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.069986925\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\" operator=\"greaterOrEqual\" value=\"0.08835\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.08034589\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a_b\" operator=\"greaterOrEqual\" value=\"5.3619\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.08034589\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_all_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"9.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.063608274\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\" operator=\"lessThan\" value=\"0.0043196743\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.069986925\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_v_user_acc_visit_week_cnt_360d\" operator=\"greaterOrEqual\" value=\"22.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.063608274\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_repay_actual\" operator=\"greaterOrEqual\" value=\"3744.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.020834351\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"greaterOrEqual\" value=\"0.955\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.04043028\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"creditloan_times_avg\" operator=\"lessThan\" value=\"11.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.020834351\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regweek\" operator=\"lessThan\" value=\"110.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.013056048\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_s_max_user_pay_meishi_succ_amt_360d\" operator=\"lessThan\" value=\"16705.0\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.05722963\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_avg_account_reg_days\" operator=\"greaterOrEqual\" value=\"599.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.048829958\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\" operator=\"greaterOrEqual\" value=\"0.06863867\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.048829958\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_repay_actual\" operator=\"greaterOrEqual\" value=\"2977.5\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"27\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_cc_limit_avg_head3_plus_tail3\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_repay_actual\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_ever_amt_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_a\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"acc_max_account_reg_days\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankallm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_credit_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_100p_cnt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_p_user_regday\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_a_b_c\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_s_max_user_pay_meishi_succ_amt_360d\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.0497\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.017770298\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_credit_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"4.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.029143035\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_100p_cnt\" operator=\"lessThan\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.0497\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_max_account_reg_days\" operator=\"greaterOrEqual\" value=\"775.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.039421517\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\" operator=\"greaterOrEqual\" value=\"0.09751695\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.039421517\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_repay_actual\" operator=\"greaterOrEqual\" value=\"2704.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.029143035\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a\" operator=\"greaterOrEqual\" value=\"2.81255\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.012279909\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\" operator=\"greaterOrEqual\" value=\"0.046649396\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.012279909\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_ever_amt_max\" operator=\"greaterOrEqual\" value=\"99270.0\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.073512666\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a_b_c\" operator=\"greaterOrEqual\" value=\"4.7674503\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.062345095\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\" operator=\"greaterOrEqual\" value=\"0.014909495\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.073512666\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regday\" operator=\"greaterOrEqual\" value=\"1269.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.0941917\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankallm3applyorgnumt\" operator=\"lessThan\" value=\"1.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.062345095\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankallm3applyorgnumt\" operator=\"lessThan\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.056022547\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_cc_limit_avg_head3_plus_tail3\" operator=\"lessThan\" value=\"0.1175\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.056022547\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_s_max_user_pay_meishi_succ_amt_360d\" operator=\"greaterOrEqual\" value=\"15102.5\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"28\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_cc_limit_avg_head3_plus_tail3\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_a_bad_abs_top_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_a\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankallm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"unsquare_consume_balance_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_100p_cnt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_p_user_regday\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_s_max_user_pay_meishi_succ_amt_360d\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.04888069\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.026596425\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_a_bad_abs_top_avg\" operator=\"lessThan\" value=\"-0.0675\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.032830365\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_cc_limit_avg_head3_plus_tail3\" operator=\"lessThan\" value=\"0.7255\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.086643085\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\" operator=\"greaterOrEqual\" value=\"4.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.0024781292\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a\" operator=\"greaterOrEqual\" value=\"1.9965999\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.015424548\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_100p_cnt\" operator=\"greaterOrEqual\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.0042526694\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_s_max_user_pay_meishi_succ_amt_360d\" operator=\"lessThan\" value=\"19185.0\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.015424548\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"unsquare_consume_balance_max\" operator=\"greaterOrEqual\" value=\"11049.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.037738558\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankallm3applyorgnumt\" operator=\"greaterOrEqual\" value=\"2.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.04888069\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_s_max_user_pay_meishi_succ_amt_360d\" operator=\"greaterOrEqual\" value=\"16800.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.037738558\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\" operator=\"greaterOrEqual\" value=\"0.13475001\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.026596425\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\" operator=\"lessThan\" value=\"0.89181286\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.084357575\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regday\" operator=\"greaterOrEqual\" value=\"1035.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.06369063\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\" operator=\"greaterOrEqual\" value=\"0.11585\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.06369063\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\" operator=\"lessThan\" value=\"0.030250002\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"29\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_cc_limit_avg_head3_plus_tail3\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"acc_max_account_reg_days\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_credit_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"acc_avg_account_reg_days\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idnbankallm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_p_user_regday\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_a_b_c\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_s_max_user_pay_meishi_succ_amt_360d\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.047372334\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.0015260167\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_credit_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"2.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.047372334\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_max_account_reg_days\" operator=\"greaterOrEqual\" value=\"783.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.026643315\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idnbankallm3applyorgnumt\" operator=\"greaterOrEqual\" value=\"3.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.037007824\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"lessThan\" value=\"0.905\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.037007824\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\" operator=\"greaterOrEqual\" value=\"3.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.013786918\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\" operator=\"greaterOrEqual\" value=\"2.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.082423404\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_cc_limit_avg_head3_plus_tail3\" operator=\"lessThan\" value=\"0.2805\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.026643315\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_avg\" operator=\"lessThan\" value=\"0.895\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.0721048\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_s_max_user_pay_meishi_succ_amt_360d\" operator=\"greaterOrEqual\" value=\"9898.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.0715301\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\" operator=\"greaterOrEqual\" value=\"0.019787995\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.060312387\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_avg_account_reg_days\" operator=\"lessThan\" value=\"820.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.09127325\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a_b_c\" operator=\"greaterOrEqual\" value=\"5.66855\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.060312387\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regday\" operator=\"greaterOrEqual\" value=\"1198.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.05384236\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\" operator=\"greaterOrEqual\" value=\"0.05625\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.05384236\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_cc_limit_avg_head3_plus_tail3\" operator=\"greaterOrEqual\" value=\"0.88049996\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"30\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_p_user_regweek\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_a_b\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"acc_max_account_reg_days\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_mob_max_now\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"acc_avg_account_reg_days\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_100p_cnt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idnbankallm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_delq_l12m_lvl1p_times_v2\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_ab\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.028280485\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.06897874\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a_b\" operator=\"greaterOrEqual\" value=\"4.3607\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.05388999\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\" operator=\"greaterOrEqual\" value=\"2.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.046932966\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\" operator=\"lessThan\" value=\"0.9486842\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.03997594\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a_b\" operator=\"lessThan\" value=\"6.6241503\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.046932966\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_avg_account_reg_days\" operator=\"lessThan\" value=\"688.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.09168639\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idnbankallm3applyorgnumt\" operator=\"lessThan\" value=\"1.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.07372354\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_ab\" operator=\"lessThan\" value=\"7.13065\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.05388999\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_ab\" operator=\"lessThan\" value=\"8.86865\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.02868037\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\" operator=\"greaterOrEqual\" value=\"0.018270802\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.099393524\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_delq_l12m_lvl1p_times_v2\" operator=\"greaterOrEqual\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.012681895\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regweek\" operator=\"greaterOrEqual\" value=\"83.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.028280485\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_100p_cnt\" operator=\"greaterOrEqual\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.01658503\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_mob_max_now\" operator=\"lessThan\" value=\"69.854996\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.03997594\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_max_account_reg_days\" operator=\"greaterOrEqual\" value=\"596.5\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"31\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_p_user_regweek\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_repay_actual\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paycftsuccamt_o_payamt_180d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankallm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_v_user_acc_visit_week_cnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_mob_internet_min_v3\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.022668943\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.05245442\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankallm3applyorgnumt\" operator=\"greaterOrEqual\" value=\"4.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.004887905\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_mob_internet_min_v3\" operator=\"lessThan\" value=\"6.92\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.022668943\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankallm3applyorgnumt\" operator=\"lessThan\" value=\"6.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.004887905\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\" operator=\"greaterOrEqual\" value=\"4.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.012893133\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"greaterOrEqual\" value=\"0.865\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.100224614\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paycftsuccamt_o_payamt_180d\" operator=\"greaterOrEqual\" value=\"0.7163642\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.012893133\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_v_user_acc_visit_week_cnt_360d\" operator=\"greaterOrEqual\" value=\"27.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.04114654\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\" operator=\"lessThan\" value=\"0.05875\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.07881478\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_v_user_acc_visit_week_cnt_360d\" operator=\"greaterOrEqual\" value=\"30.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.05564266\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"greaterOrEqual\" value=\"0.96500003\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.05564266\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"lessThan\" value=\"0.835\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.04114654\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regweek\" operator=\"greaterOrEqual\" value=\"156.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.03190774\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"greaterOrEqual\" value=\"0.945\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.03190774\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_repay_actual\" operator=\"greaterOrEqual\" value=\"3623.5\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"32\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_all_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paycftsuccamt_o_payamt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_cc_limit_avg_head3_plus_tail3\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_a_bad_abs_top_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_ever_amt_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_a\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankallm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_p_user_regday\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"creditloan_times_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankconsumem3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_a_b_c\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_s_max_user_pay_meishi_succ_amt_360d\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.05311238\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.0035143127\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_a_bad_abs_top_avg\" operator=\"lessThan\" value=\"-0.052500002\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.03290422\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_cc_limit_avg_head3_plus_tail3\" operator=\"lessThan\" value=\"0.7795\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.042907175\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_a_bad_abs_top_avg\" operator=\"lessThan\" value=\"-0.2565\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.0973174\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paycftsuccamt_o_payamt_360d\" operator=\"greaterOrEqual\" value=\"0.5477363\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.0069520148\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a\" operator=\"greaterOrEqual\" value=\"1.6326001\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.0069520148\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"creditloan_times_avg\" operator=\"greaterOrEqual\" value=\"11.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.0035143127\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_all_query_cnt_2y\" operator=\"lessThan\" value=\"11.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.01398064\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_ever_amt_max\" operator=\"greaterOrEqual\" value=\"2278.0\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.01398064\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankconsumem3applyorgnumt\" operator=\"greaterOrEqual\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.027499039\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regday\" operator=\"greaterOrEqual\" value=\"1078.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.041017435\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankallm3applyorgnumt\" operator=\"lessThan\" value=\"4.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.027499039\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_s_max_user_pay_meishi_succ_amt_360d\" operator=\"greaterOrEqual\" value=\"18797.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.041017435\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\" operator=\"greaterOrEqual\" value=\"0.018327273\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.05311238\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a_b_c\" operator=\"greaterOrEqual\" value=\"7.3603\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.077081636\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_s_max_user_pay_meishi_succ_amt_360d\" operator=\"greaterOrEqual\" value=\"10031.0\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"33\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_p_user_regweek\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankalld7applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_cc_limit_avg_head3_plus_tail3\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_repay_actual\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"unsquare_consume_times_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"acc_avg_account_reg_days\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankp2pm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_100p_cnt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_s_max_user_pay_meishi_succ_amt_360d\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.040907767\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.0827591\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"greaterOrEqual\" value=\"0.955\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.0265224\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"unsquare_consume_times_avg\" operator=\"lessThan\" value=\"7.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.017582811\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\" operator=\"greaterOrEqual\" value=\"2.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.008643222\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_repay_actual\" operator=\"lessThan\" value=\"3811.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.017582811\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankp2pm3applyorgnumt\" operator=\"greaterOrEqual\" value=\"1.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.008643222\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_s_max_user_pay_meishi_succ_amt_360d\" operator=\"greaterOrEqual\" value=\"10000.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.013205279\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\" operator=\"greaterOrEqual\" value=\"0.0920649\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.024718598\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_100p_cnt\" operator=\"lessThan\" value=\"1.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.074485965\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_avg_account_reg_days\" operator=\"greaterOrEqual\" value=\"611.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.040907767\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\" operator=\"lessThan\" value=\"0.4714052\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.05355764\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regweek\" operator=\"greaterOrEqual\" value=\"194.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.05355764\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankalld7applyorgnumt\" operator=\"greaterOrEqual\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.0265224\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\" operator=\"lessThan\" value=\"0.69098145\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.033715084\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_cc_limit_avg_head3_plus_tail3\" operator=\"greaterOrEqual\" value=\"0.96650004\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.033715084\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\" operator=\"greaterOrEqual\" value=\"2.5\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"34\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_all_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_limit_normal_sum\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_a_b\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"unsquare_consume_times_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"acc_avg_account_reg_days\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_p_user_regday\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"creditloan_times_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_s_max_user_pay_meishi_succ_amt_360d\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.029053573\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.08157252\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a_b\" operator=\"greaterOrEqual\" value=\"4.72825\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.043818753\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\" operator=\"greaterOrEqual\" value=\"0.01479657\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.029053573\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\" operator=\"lessThan\" value=\"0.9128788\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.036436163\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_limit_normal_sum\" operator=\"greaterOrEqual\" value=\"422650.0\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.036436163\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_avg_account_reg_days\" operator=\"lessThan\" value=\"696.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.043818753\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_all_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"8.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.06006258\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"lessThan\" value=\"0.96500003\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.062149704\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a_b\" operator=\"lessThan\" value=\"5.66855\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.0022521308\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\" operator=\"greaterOrEqual\" value=\"2.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.05652281\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"greaterOrEqual\" value=\"0.925\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.019646637\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_avg_account_reg_days\" operator=\"greaterOrEqual\" value=\"801.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.019646637\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_s_max_user_pay_meishi_succ_amt_360d\" operator=\"lessThan\" value=\"12356.0\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.0022521308\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"unsquare_consume_times_avg\" operator=\"greaterOrEqual\" value=\"7.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.015652852\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"creditloan_times_avg\" operator=\"lessThan\" value=\"9.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.015652852\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regday\" operator=\"lessThan\" value=\"452.5\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"35\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"acc_max_account_active_range_days\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_a\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"acc_max_account_reg_days\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_v_user_acc_visit_week_cnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"qry_times_self_l1st\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"acc_avg_account_reg_days\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_p_user_regday\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"creditloan_times_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"consumerloan_times_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_s_max_user_pay_meishi_succ_amt_360d\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.032077905\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.12404684\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\" operator=\"lessThan\" value=\"0.9511905\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.014069202\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"qry_times_self_l1st\" operator=\"lessThan\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.032077905\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_max_account_reg_days\" operator=\"greaterOrEqual\" value=\"886.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.01730492\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\" operator=\"greaterOrEqual\" value=\"0.12615001\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.01730492\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"consumerloan_times_avg\" operator=\"lessThan\" value=\"9.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.017574165\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a\" operator=\"greaterOrEqual\" value=\"2.35765\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.055354297\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_max_account_reg_days\" operator=\"lessThan\" value=\"870.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.063141584\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_s_max_user_pay_meishi_succ_amt_360d\" operator=\"greaterOrEqual\" value=\"6060.0\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.08094425\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_s_max_user_pay_meishi_succ_amt_360d\" operator=\"greaterOrEqual\" value=\"9940.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.058682326\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\" operator=\"greaterOrEqual\" value=\"2.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.04693655\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_avg_account_reg_days\" operator=\"lessThan\" value=\"809.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.058682326\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_v_user_acc_visit_week_cnt_360d\" operator=\"lessThan\" value=\"35.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.04693655\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regday\" operator=\"greaterOrEqual\" value=\"1365.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.039507225\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_max_account_active_range_days\" operator=\"lessThan\" value=\"636.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.039507225\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"creditloan_times_avg\" operator=\"lessThan\" value=\"7.5\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"36\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_repay_actual\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"unsquare_consume_times_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_a_bad_abs_top_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paycftsuccamt_o_payamt_180d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankallm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_p_user_regday\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"consumerloan_times_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_a_b_c\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_s_max_user_pay_meishi_succ_amt_360d\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"0.018677602\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.023752458\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankallm3applyorgnumt\" operator=\"lessThan\" value=\"1.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.03903451\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regday\" operator=\"greaterOrEqual\" value=\"981.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.054935344\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\" operator=\"lessThan\" value=\"0.09515\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.07843259\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a_b_c\" operator=\"greaterOrEqual\" value=\"6.9060497\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.051017087\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_avg\" operator=\"lessThan\" value=\"0.485\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.031393483\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_repay_actual\" operator=\"greaterOrEqual\" value=\"3240.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.03903451\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"unsquare_consume_times_avg\" operator=\"lessThan\" value=\"17.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.031393483\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\" operator=\"lessThan\" value=\"0.006400016\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.023752458\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"consumerloan_times_avg\" operator=\"lessThan\" value=\"11.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.0059867287\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\" operator=\"greaterOrEqual\" value=\"0.03505359\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.014869593\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a_b_c\" operator=\"greaterOrEqual\" value=\"7.76115\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.014869593\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_a_bad_abs_top_avg\" operator=\"lessThan\" value=\"-0.104499996\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.0059867287\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\" operator=\"lessThan\" value=\"0.04295\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.0092644915\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_s_max_user_pay_meishi_succ_amt_360d\" operator=\"lessThan\" value=\"8792.0\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.07303243\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paycftsuccamt_o_payamt_180d\" operator=\"greaterOrEqual\" value=\"0.7197876\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"37\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_p_user_regweek\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_all_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_cc_limit_avg_head3_plus_tail3\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_repay_actual\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_amt_mbsloan_unsquare_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"acc_max_account_reg_days\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paycftsuccamt_o_payamt_180d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_100p_cnt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"creditloan_times_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_mob_internet_min_v3\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.017207578\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.0638204\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_max_account_reg_days\" operator=\"greaterOrEqual\" value=\"869.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.032581143\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"greaterOrEqual\" value=\"0.855\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.017221197\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_amt_mbsloan_unsquare_max\" operator=\"greaterOrEqual\" value=\"98060.0\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.032581143\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_100p_cnt\" operator=\"lessThan\" value=\"1.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.017207578\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_all_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"6.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.032581143\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paycftsuccamt_o_payamt_180d\" operator=\"greaterOrEqual\" value=\"0.41330022\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.04468407\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_repay_actual\" operator=\"greaterOrEqual\" value=\"1966.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.04468407\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\" operator=\"greaterOrEqual\" value=\"2.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.056144543\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\" operator=\"greaterOrEqual\" value=\"3.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.056144543\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_mob_internet_min_v3\" operator=\"greaterOrEqual\" value=\"8.594999\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.14021927\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paycftsuccamt_o_payamt_180d\" operator=\"greaterOrEqual\" value=\"0.36826414\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.013470901\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regweek\" operator=\"greaterOrEqual\" value=\"72.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.013470901\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regweek\" operator=\"lessThan\" value=\"59.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.0018683383\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_cc_limit_avg_head3_plus_tail3\" operator=\"greaterOrEqual\" value=\"0.7795\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.0018683383\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"creditloan_times_avg\" operator=\"greaterOrEqual\" value=\"11.5\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"38\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_limit_normal_sum\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_a_bad_abs_top_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_amt_mbsloan_unsquare_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paycftsuccamt_o_payamt_180d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankp2pm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"sp_s_sum_user_sp_alipay_pay_succ_amt_6m\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_p_user_regday\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"creditloan_times_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"consumerloan_times_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_s_max_user_pay_meishi_succ_amt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_mob_internet_min_v3\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.014887202\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.030519817\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankp2pm3applyorgnumt\" operator=\"greaterOrEqual\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"2.8793095E-4\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_s_max_user_pay_meishi_succ_amt_360d\" operator=\"greaterOrEqual\" value=\"11792.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.0072996356\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankp2pm3applyorgnumt\" operator=\"lessThan\" value=\"2.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.014887202\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"creditloan_times_avg\" operator=\"lessThan\" value=\"15.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.0072996356\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_amt_mbsloan_unsquare_max\" operator=\"greaterOrEqual\" value=\"175500.0\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.02160601\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_mob_internet_min_v3\" operator=\"lessThan\" value=\"4.9849997\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"2.8793095E-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"consumerloan_times_avg\" operator=\"lessThan\" value=\"9.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.108859345\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paycftsuccamt_o_payamt_180d\" operator=\"greaterOrEqual\" value=\"0.8069681\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.041467614\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regday\" operator=\"greaterOrEqual\" value=\"1049.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.03071802\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_a_bad_abs_top_avg\" operator=\"lessThan\" value=\"0.1455\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.041467614\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_limit_normal_sum\" operator=\"greaterOrEqual\" value=\"244130.0\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.062114224\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\" operator=\"lessThan\" value=\"0.09275\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.02280261\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"consumerloan_times_avg\" operator=\"lessThan\" value=\"9.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.03071802\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_mob_internet_min_v3\" operator=\"lessThan\" value=\"5.3050003\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.02280261\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"sp_s_sum_user_sp_alipay_pay_succ_amt_6m\" operator=\"greaterOrEqual\" value=\"118.91\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"39\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_repay_actual\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_a_bad_abs_top_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paycftsuccamt_o_payamt_180d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_credit_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_v_user_acc_visit_week_cnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_100p_cnt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idnbankallm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"consumerloan_times_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_a_b_c\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.014770038\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.014175935\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\" operator=\"greaterOrEqual\" value=\"3.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.0025687339\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_v_user_acc_visit_week_cnt_360d\" operator=\"greaterOrEqual\" value=\"48.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.014175935\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"consumerloan_times_avg\" operator=\"greaterOrEqual\" value=\"18.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.0058036004\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"greaterOrEqual\" value=\"1.035\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.12619463\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paycftsuccamt_o_payamt_180d\" operator=\"greaterOrEqual\" value=\"0.58424944\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.04822301\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_repay_actual\" operator=\"greaterOrEqual\" value=\"247.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.04822301\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_100p_cnt\" operator=\"greaterOrEqual\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.04161068\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a_b_c\" operator=\"greaterOrEqual\" value=\"6.5369\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.060886204\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idnbankallm3applyorgnumt\" operator=\"lessThan\" value=\"3.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.04161068\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_a_bad_abs_top_avg\" operator=\"lessThan\" value=\"0.1625\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.02861851\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a_b_c\" operator=\"lessThan\" value=\"8.9846\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.02861851\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"consumerloan_times_avg\" operator=\"lessThan\" value=\"9.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.014770038\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_100p_cnt\" operator=\"greaterOrEqual\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.0025687339\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_credit_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"2.5\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"40\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_all_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paycftsuccamt_o_payamt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_limit_normal_sum\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_repay_actual\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_a\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"unsquare_consume_balance_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_mob_max_now\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"overduehighestmonthlyofloan\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idnbankallm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_delq_l12m_lvl1p_times_v2\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.028945075\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.051225282\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_limit_normal_sum\" operator=\"greaterOrEqual\" value=\"291499.0\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.071482316\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_all_query_cnt_2y\" operator=\"lessThan\" value=\"13.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.09526744\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a\" operator=\"greaterOrEqual\" value=\"3.1574001\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.07351502\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"overduehighestmonthlyofloan\" operator=\"greaterOrEqual\" value=\"-1.0E-6\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.051225282\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\" operator=\"greaterOrEqual\" value=\"0.0281\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.028945075\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_repay_actual\" operator=\"lessThan\" value=\"10515.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.040085178\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_mob_max_now\" operator=\"greaterOrEqual\" value=\"73.015\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.040085178\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idnbankallm3applyorgnumt\" operator=\"greaterOrEqual\" value=\"5.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.10602633\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_delq_l12m_lvl1p_times_v2\" operator=\"greaterOrEqual\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.24986567\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_limit_normal_sum\" operator=\"lessThan\" value=\"12427.0\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.048543032\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_mob_max_now\" operator=\"greaterOrEqual\" value=\"22.335\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-7.95046E-4\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"greaterOrEqual\" value=\"0.865\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.048543032\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"unsquare_consume_balance_max\" operator=\"greaterOrEqual\" value=\"11005.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.009967983\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paycftsuccamt_o_payamt_360d\" operator=\"greaterOrEqual\" value=\"0.39964634\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"41\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_all_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_a_b\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"wm_add_r_user_wm_add_xiuxianyule_o_total\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paycftsuccamt_o_payamt_180d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankallm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"acc_avg_account_reg_days\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"overduehighestmonthlyofloan\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"creditloan_times_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_s_max_user_pay_meishi_succ_amt_360d\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"0.0032296563\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.021736043\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"wm_add_r_user_wm_add_xiuxianyule_o_total\" operator=\"greaterOrEqual\" value=\"0.052950002\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.0032296563\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_s_max_user_pay_meishi_succ_amt_360d\" operator=\"greaterOrEqual\" value=\"16350.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.01248285\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\" operator=\"greaterOrEqual\" value=\"0.129563\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.021736043\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\" operator=\"lessThan\" value=\"0.62828946\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.01248285\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_avg_account_reg_days\" operator=\"lessThan\" value=\"608.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.12429689\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"greaterOrEqual\" value=\"1.005\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.05879121\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a_b\" operator=\"greaterOrEqual\" value=\"4.1809998\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.05879121\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paycftsuccamt_o_payamt_180d\" operator=\"greaterOrEqual\" value=\"0.4136013\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.061232094\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_s_max_user_pay_meishi_succ_amt_360d\" operator=\"greaterOrEqual\" value=\"13307.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.032766566\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\" operator=\"greaterOrEqual\" value=\"0.04205\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.017993646\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_all_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"7.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.03427128\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"greaterOrEqual\" value=\"0.915\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.017993646\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"creditloan_times_avg\" operator=\"lessThan\" value=\"9.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.0073819947\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"overduehighestmonthlyofloan\" operator=\"greaterOrEqual\" value=\"-1.0E-6\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.0073819947\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankallm3applyorgnumt\" operator=\"lessThan\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"42\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_limit_normal_sum\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_repay_actual\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_a\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_credit_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"qry_times_self_l1st\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idnbankallm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_p_user_regday\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_amt_l6th_creditloan\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"creditloan_times_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_mob_internet_min_v3\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"0.018659627\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.07100022\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"qry_times_self_l1st\" operator=\"greaterOrEqual\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.07100022\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"creditloan_times_avg\" operator=\"greaterOrEqual\" value=\"15.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.13672112\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_credit_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"6.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.018659627\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regday\" operator=\"greaterOrEqual\" value=\"1030.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.037841275\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_amt_l6th_creditloan\" operator=\"greaterOrEqual\" value=\"6688.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.037841275\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_mob_internet_min_v3\" operator=\"lessThan\" value=\"2.665\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.093270324\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_limit_normal_sum\" operator=\"greaterOrEqual\" value=\"283102.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.03053408\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idnbankallm3applyorgnumt\" operator=\"greaterOrEqual\" value=\"4.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.04462989\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_mob_internet_min_v3\" operator=\"lessThan\" value=\"1.465\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.054160997\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_repay_actual\" operator=\"lessThan\" value=\"25222.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.02970054\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a\" operator=\"greaterOrEqual\" value=\"1.7768\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.0015439764\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\" operator=\"greaterOrEqual\" value=\"0.004324329\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.0014659822\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_mob_internet_min_v3\" operator=\"lessThan\" value=\"4.825\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"43\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"mortgageloan_repay_actual\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paycftsuccamt_o_payamt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_limit_normal_sum\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_cc_limit_avg_head3_plus_tail3\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_a_bad_abs_top_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankallm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankloanm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_credit_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_mob_max_now\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_p_user_regday\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"creditloan_times_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"consumerloan_times_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_s_max_user_pay_meishi_succ_amt_360d\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.008057345\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.017226968\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankloanm3applyorgnumt\" operator=\"greaterOrEqual\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.07052525\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paycftsuccamt_o_payamt_360d\" operator=\"greaterOrEqual\" value=\"0.3099945\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.029833917\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_limit_normal_sum\" operator=\"greaterOrEqual\" value=\"2999.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.07052525\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regday\" operator=\"lessThan\" value=\"721.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.1501435\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\" operator=\"lessThan\" value=\"0.3766892\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.017226968\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"consumerloan_times_avg\" operator=\"lessThan\" value=\"13.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.0046200193\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankallm3applyorgnumt\" operator=\"lessThan\" value=\"7.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.029833917\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"mortgageloan_repay_actual\" operator=\"lessThan\" value=\"2088.0\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.0017186627\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_a_bad_abs_top_avg\" operator=\"lessThan\" value=\"0.0385\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.0046200193\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_cc_limit_avg_head3_plus_tail3\" operator=\"lessThan\" value=\"1.0435\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.0017186627\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_mob_max_now\" operator=\"greaterOrEqual\" value=\"76.955\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.008057345\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"creditloan_times_avg\" operator=\"lessThan\" value=\"11.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.04795988\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_s_max_user_pay_meishi_succ_amt_360d\" operator=\"greaterOrEqual\" value=\"16880.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.02449769\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_credit_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"6.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.02449769\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_cc_limit_avg_head3_plus_tail3\" operator=\"greaterOrEqual\" value=\"0.46850002\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"44\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paycftsuccamt_o_payamt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_limit_normal_sum\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_a_b\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"unsquare_consume_times_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_a_bad_abs_top_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellallallm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"wm_add_r_user_wm_add_xiuxianyule_o_total\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankp2pm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"sp_s_sum_user_sp_alipay_pay_succ_amt_6m\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_amt_l6th_creditloan\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_s_max_user_pay_meishi_succ_amt_360d\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.004047243\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.043204345\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a_b\" operator=\"greaterOrEqual\" value=\"5.6541\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.016214954\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\" operator=\"greaterOrEqual\" value=\"2.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.031097747\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"sp_s_sum_user_sp_alipay_pay_succ_amt_6m\" operator=\"greaterOrEqual\" value=\"117.05\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.02365635\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_amt_l6th_creditloan\" operator=\"greaterOrEqual\" value=\"19299.0\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.02365635\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_limit_normal_sum\" operator=\"greaterOrEqual\" value=\"388895.0\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.06283561\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellallallm3applyorgnumt\" operator=\"lessThan\" value=\"4.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.043204345\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_s_max_user_pay_meishi_succ_amt_360d\" operator=\"lessThan\" value=\"9899.0\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.031097747\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paycftsuccamt_o_payamt_360d\" operator=\"greaterOrEqual\" value=\"0.029856287\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.011606776\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"wm_add_r_user_wm_add_xiuxianyule_o_total\" operator=\"greaterOrEqual\" value=\"0.016350001\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.14130728\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paycftsuccamt_o_payamt_360d\" operator=\"greaterOrEqual\" value=\"0.6843064\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.04892229\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_limit_normal_sum\" operator=\"greaterOrEqual\" value=\"2000.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.04892229\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_a_bad_abs_top_avg\" operator=\"lessThan\" value=\"0.0555\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.016214954\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"unsquare_consume_times_avg\" operator=\"lessThan\" value=\"7.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.004047243\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankp2pm3applyorgnumt\" operator=\"greaterOrEqual\" value=\"1.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.009838368\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_avg\" operator=\"greaterOrEqual\" value=\"0.315\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"45\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"mortgageloan_repay_actual\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_p_user_regweek\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_limit_normal_sum\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_cc_limit_avg_head3_plus_tail3\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"acc_max_account_active_range_days\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_repay_actual\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_a_bad_abs_top_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"qry_times_self_l1st\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_mob_max_now\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"overduehighestmonthlyofloan\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_100p_cnt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"creditloan_times_avg\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.015555391\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.027438592\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_a_bad_abs_top_avg\" operator=\"lessThan\" value=\"-0.14950001\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.11444307\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_cc_limit_avg_head3_plus_tail3\" operator=\"lessThan\" value=\"0.3035\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.042040173\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regweek\" operator=\"greaterOrEqual\" value=\"51.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.08365495\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"overduehighestmonthlyofloan\" operator=\"greaterOrEqual\" value=\"-1.0E-6\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.027438592\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"creditloan_times_avg\" operator=\"lessThan\" value=\"11.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.0128370095\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_100p_cnt\" operator=\"lessThan\" value=\"1.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.042040173\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"mortgageloan_repay_actual\" operator=\"lessThan\" value=\"1073.0\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.005307826\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_100p_cnt\" operator=\"greaterOrEqual\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.0128370095\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_mob_max_now\" operator=\"lessThan\" value=\"56.275\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.005307826\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_limit_normal_sum\" operator=\"greaterOrEqual\" value=\"250501.0\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.0022213566\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"qry_times_self_l1st\" operator=\"lessThan\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.0022213566\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\" operator=\"lessThan\" value=\"0.4696691\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.015555391\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_repay_actual\" operator=\"greaterOrEqual\" value=\"3233.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.037430223\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_max_account_active_range_days\" operator=\"greaterOrEqual\" value=\"627.5\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"46\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_repay_actual\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"qry_times_self_l1st\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_p_user_regday\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_amt_l6th_creditloan\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"creditloan_times_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"consumerloan_times_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankp2pd7applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_ab\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_mob_internet_min_v3\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"0.010389514\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.10622935\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankp2pd7applyorgnumt\" operator=\"greaterOrEqual\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.010389514\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_repay_actual\" operator=\"greaterOrEqual\" value=\"4575.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.027850498\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_amt_l6th_creditloan\" operator=\"greaterOrEqual\" value=\"41595.0\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.07182043\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"qry_times_self_l1st\" operator=\"lessThan\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.029884364\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regday\" operator=\"greaterOrEqual\" value=\"575.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.012248645\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\" operator=\"lessThan\" value=\"0.02775\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.041623875\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_ab\" operator=\"greaterOrEqual\" value=\"1.9814999\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.023626417\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"creditloan_times_avg\" operator=\"greaterOrEqual\" value=\"12.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.023626417\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_repay_actual\" operator=\"greaterOrEqual\" value=\"7672.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-9.2956517E-4\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"consumerloan_times_avg\" operator=\"lessThan\" value=\"9.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.012248645\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_mob_internet_min_v3\" operator=\"lessThan\" value=\"7.9849997\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-9.2956517E-4\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regday\" operator=\"greaterOrEqual\" value=\"1267.5\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"47\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"unsquare_consume_times_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_a_bad_abs_top_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_ever_amt_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"wm_add_r_user_wm_add_xiuxianyule_o_total\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankallm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"unsquare_consume_balance_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_mob_max_now\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"sp_s_sum_user_sp_alipay_pay_succ_amt_6m\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_100p_cnt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_p_user_regday\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"consumerloan_times_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_s_max_user_pay_meishi_succ_amt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_mob_internet_min_v3\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"0.01791991\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.003986006\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"unsquare_consume_times_avg\" operator=\"lessThan\" value=\"7.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.051283106\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_mob_internet_min_v3\" operator=\"lessThan\" value=\"8.594999\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.031817332\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankallm3applyorgnumt\" operator=\"greaterOrEqual\" value=\"1.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.01586927\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_mob_max_now\" operator=\"lessThan\" value=\"71.305\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.031817332\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"wm_add_r_user_wm_add_xiuxianyule_o_total\" operator=\"greaterOrEqual\" value=\"0.0322\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.009927638\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankallm3applyorgnumt\" operator=\"lessThan\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.01586927\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_ever_amt_max\" operator=\"greaterOrEqual\" value=\"5589.0\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.009927638\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_a_bad_abs_top_avg\" operator=\"greaterOrEqual\" value=\"0.23249999\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.13754797\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"consumerloan_times_avg\" operator=\"greaterOrEqual\" value=\"14.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.01791991\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"unsquare_consume_balance_max\" operator=\"lessThan\" value=\"13372.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.04630462\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_s_max_user_pay_meishi_succ_amt_360d\" operator=\"lessThan\" value=\"4921.0\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.05760767\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"wm_add_r_user_wm_add_xiuxianyule_o_total\" operator=\"lessThan\" value=\"0.07585\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.003986006\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regday\" operator=\"greaterOrEqual\" value=\"540.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.0069669513\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_100p_cnt\" operator=\"greaterOrEqual\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.0069669513\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"sp_s_sum_user_sp_alipay_pay_succ_amt_6m\" operator=\"greaterOrEqual\" value=\"240.2\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"48\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"mortgageloan_repay_actual\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paycftsuccamt_o_payamt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_limit_normal_sum\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"consumerloan_times_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_delq_l12m_lvl1p_times_v2\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_s_max_user_pay_meishi_succ_amt_360d\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.010313129\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.0751745\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"mortgageloan_repay_actual\" operator=\"greaterOrEqual\" value=\"2427.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.039406076\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\" operator=\"greaterOrEqual\" value=\"0.21204999\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.024309698\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_s_max_user_pay_meishi_succ_amt_360d\" operator=\"lessThan\" value=\"17815.0\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.039406076\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paycftsuccamt_o_payamt_360d\" operator=\"greaterOrEqual\" value=\"0.3634361\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.05051353\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"0.4564394\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.05051353\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_limit_normal_sum\" operator=\"lessThan\" value=\"431410.0\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.035723764\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_delq_l12m_lvl1p_times_v2\" operator=\"greaterOrEqual\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.20069605\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_limit_normal_sum\" operator=\"lessThan\" value=\"9473.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.12077792\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\" operator=\"greaterOrEqual\" value=\"0.18044999\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.014110866\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\" operator=\"lessThan\" value=\"0.90399384\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.009551819\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"consumerloan_times_avg\" operator=\"lessThan\" value=\"9.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.024309698\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_s_max_user_pay_meishi_succ_amt_360d\" operator=\"greaterOrEqual\" value=\"7250.5\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"49\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_repay_actual\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"unsquare_consume_times_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_amt_mbsloan_unsquare_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paycftsuccamt_o_payamt_180d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"qry_times_self_l1st\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_mob_max_now\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_100p_cnt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankp2pd7applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_delq_l12m_lvl1p_times_v2\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_s_max_user_pay_meishi_succ_amt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_mob_internet_min_v3\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.013171258\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.04260415\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_amt_mbsloan_unsquare_max\" operator=\"greaterOrEqual\" value=\"122804.0\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.026307698\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"qry_times_self_l1st\" operator=\"greaterOrEqual\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.042390633\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_repay_actual\" operator=\"lessThan\" value=\"5498.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.012584876\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paycftsuccamt_o_payamt_180d\" operator=\"greaterOrEqual\" value=\"0.15689957\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.07065094\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"unsquare_consume_times_avg\" operator=\"lessThan\" value=\"11.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.19595337\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_delq_l12m_lvl1p_times_v2\" operator=\"greaterOrEqual\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.04178055\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_mob_max_now\" operator=\"greaterOrEqual\" value=\"5.565\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.103161685\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_mob_internet_min_v3\" operator=\"greaterOrEqual\" value=\"5.855\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.04178055\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankp2pd7applyorgnumt\" operator=\"greaterOrEqual\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.015497193\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_s_max_user_pay_meishi_succ_amt_360d\" operator=\"greaterOrEqual\" value=\"12752.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.012546983\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_100p_cnt\" operator=\"greaterOrEqual\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"50\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idnbankotherloworglowconcernt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_cc_limit_avg_head3_plus_tail3\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_repay_actual\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_a_bad_abs_top_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paycftsuccamt_o_payamt_180d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"acc_avg_account_reg_days\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_100p_cnt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_p_user_regday\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_s_max_user_pay_meishi_succ_amt_360d\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.016352426\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.036612634\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_cc_limit_avg_head3_plus_tail3\" operator=\"lessThan\" value=\"0.2095\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.14892325\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paycftsuccamt_o_payamt_180d\" operator=\"greaterOrEqual\" value=\"0.7690822\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.06467657\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_repay_actual\" operator=\"greaterOrEqual\" value=\"423.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.0129453\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_avg_account_reg_days\" operator=\"greaterOrEqual\" value=\"382.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.036612634\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_a_bad_abs_top_avg\" operator=\"lessThan\" value=\"-0.1895\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.06467657\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_repay_actual\" operator=\"lessThan\" value=\"2004.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.06506048\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_a_bad_abs_top_avg\" operator=\"greaterOrEqual\" value=\"0.1505\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.021921737\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\" operator=\"greaterOrEqual\" value=\"0.026986567\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.0355577\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regday\" operator=\"greaterOrEqual\" value=\"1311.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.038279235\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_a_bad_abs_top_avg\" operator=\"lessThan\" value=\"0.27850002\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.0129453\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idnbankotherloworglowconcernt\" operator=\"greaterOrEqual\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.0017270655\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_s_max_user_pay_meishi_succ_amt_360d\" operator=\"greaterOrEqual\" value=\"20965.0\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.0017270655\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_100p_cnt\" operator=\"greaterOrEqual\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"51\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_all_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paycftsuccamt_o_payamt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_a_b\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_repay_actual\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_a_bad_abs_top_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"overduehighestmonthlyofloan\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankp2pm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"sp_s_sum_user_sp_alipay_pay_succ_amt_6m\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_p_user_regday\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankconsumem3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_mob_internet_min_v3\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.027367214\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.017791996\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regday\" operator=\"lessThan\" value=\"596.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.058571447\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paycftsuccamt_o_payamt_360d\" operator=\"greaterOrEqual\" value=\"0.5502962\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.030731635\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_mob_internet_min_v3\" operator=\"lessThan\" value=\"7.245\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.058571447\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regday\" operator=\"lessThan\" value=\"215.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.15445915\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\" operator=\"lessThan\" value=\"0.2546296\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.030731635\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankp2pm3applyorgnumt\" operator=\"greaterOrEqual\" value=\"1.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.017791996\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a_b\" operator=\"greaterOrEqual\" value=\"3.6845999\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.0048523573\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a_b\" operator=\"greaterOrEqual\" value=\"2.39815\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.0048523573\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankconsumem3applyorgnumt\" operator=\"greaterOrEqual\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.012045297\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"sp_s_sum_user_sp_alipay_pay_succ_amt_6m\" operator=\"greaterOrEqual\" value=\"29.349998\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.0035964698\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_a_bad_abs_top_avg\" operator=\"lessThan\" value=\"0.13949999\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.0035964698\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_repay_actual\" operator=\"greaterOrEqual\" value=\"3330.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.047373068\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"lessThan\" value=\"0.865\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.027367214\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"overduehighestmonthlyofloan\" operator=\"greaterOrEqual\" value=\"-1.0E-6\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.012045297\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_all_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"5.5\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"52\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_all_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paycftsuccamt_o_payamt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_a_b\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_amt_mbsloan_unsquare_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_a\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"wm_add_r_user_wm_add_xiuxianyule_o_total\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"qry_times_self_l1st\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_amt_l6th_creditloan\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"creditloan_times_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_s_max_user_pay_meishi_succ_amt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_mob_internet_min_v3\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"0.002941731\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.012967266\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a\" operator=\"greaterOrEqual\" value=\"3.5222\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.02582829\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"creditloan_times_avg\" operator=\"lessThan\" value=\"12.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.037959076\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a_b\" operator=\"greaterOrEqual\" value=\"6.1243\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.057995442\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"wm_add_r_user_wm_add_xiuxianyule_o_total\" operator=\"lessThan\" value=\"0.01125\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.037959076\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_avg\" operator=\"lessThan\" value=\"0.35500002\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.02582829\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_all_query_cnt_2y\" operator=\"lessThan\" value=\"6.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.019397778\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paycftsuccamt_o_payamt_360d\" operator=\"greaterOrEqual\" value=\"0.4124054\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.019397778\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_amt_mbsloan_unsquare_max\" operator=\"greaterOrEqual\" value=\"118999.0\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.06424212\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"qry_times_self_l1st\" operator=\"greaterOrEqual\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.10002548\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_amt_l6th_creditloan\" operator=\"greaterOrEqual\" value=\"43875.0\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.024773572\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_mob_internet_min_v3\" operator=\"lessThan\" value=\"2.955\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.002941731\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\" operator=\"greaterOrEqual\" value=\"0.01447181\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.024304623\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_s_max_user_pay_meishi_succ_amt_360d\" operator=\"lessThan\" value=\"16799.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.012967266\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a_b\" operator=\"greaterOrEqual\" value=\"2.605\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"53\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_all_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_repay_actual\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_amt_mbsloan_unsquare_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paycftsuccamt_o_payamt_180d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_mob_max_now\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"acc_avg_account_reg_days\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"overduehighestmonthlyofloan\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankp2pm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_amt_l6th_creditloan\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_s_max_user_pay_meishi_succ_amt_360d\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"0.010004557\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.035940494\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_mob_max_now\" operator=\"greaterOrEqual\" value=\"79.115\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.08265727\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_amt_mbsloan_unsquare_max\" operator=\"greaterOrEqual\" value=\"150000.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.047351364\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paycftsuccamt_o_payamt_180d\" operator=\"greaterOrEqual\" value=\"0.12690079\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.061505526\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_all_query_cnt_2y\" operator=\"lessThan\" value=\"10.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.035940494\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_amt_l6th_creditloan\" operator=\"greaterOrEqual\" value=\"26291.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.018657614\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_s_max_user_pay_meishi_succ_amt_360d\" operator=\"lessThan\" value=\"32415.0\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.09256497\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"overduehighestmonthlyofloan\" operator=\"greaterOrEqual\" value=\"-1.0E-6\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.010004557\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_mob_max_now\" operator=\"greaterOrEqual\" value=\"37.045\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.030194333\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankp2pm3applyorgnumt\" operator=\"greaterOrEqual\" value=\"2.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.030194333\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_repay_actual\" operator=\"greaterOrEqual\" value=\"505.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.018657614\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_avg_account_reg_days\" operator=\"greaterOrEqual\" value=\"692.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.007596265\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_amt_l6th_creditloan\" operator=\"greaterOrEqual\" value=\"15299.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.007596265\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_avg\" operator=\"lessThan\" value=\"0.515\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"54\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_repay_actual\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_a_bad_abs_top_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_credit_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_v_user_acc_visit_week_cnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_amt_l6th_creditloan\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"creditloan_times_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_s_max_user_pay_meishi_succ_amt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_mob_internet_min_v3\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.031473592\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.011961587\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\" operator=\"greaterOrEqual\" value=\"4.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.062836915\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_v_user_acc_visit_week_cnt_360d\" operator=\"lessThan\" value=\"49.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.09389722\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_amt_l6th_creditloan\" operator=\"greaterOrEqual\" value=\"22541.0\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.027067877\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_mob_internet_min_v3\" operator=\"lessThan\" value=\"10.535\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.027067877\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"creditloan_times_avg\" operator=\"greaterOrEqual\" value=\"15.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.011961587\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_s_max_user_pay_meishi_succ_amt_360d\" operator=\"lessThan\" value=\"11382.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.005422489\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_avg\" operator=\"lessThan\" value=\"0.485\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.003269549\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_amt_l6th_creditloan\" operator=\"greaterOrEqual\" value=\"20101.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.003269549\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_a_bad_abs_top_avg\" operator=\"greaterOrEqual\" value=\"0.1275\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.005422489\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_credit_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"7.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.015357535\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_repay_actual\" operator=\"greaterOrEqual\" value=\"5176.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.015357535\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_a_bad_abs_top_avg\" operator=\"lessThan\" value=\"0.14250001\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"55\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_t2_chuxing_che_youche\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paycftsuccamt_o_payamt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_limit_normal_sum\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_cc_limit_avg_head3_plus_tail3\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"acc_max_account_active_range_days\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"unsquare_consume_balance\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_a_bad_abs_top_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idnbankloanm1applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_credit_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"sp_s_sum_user_sp_alipay_pay_succ_amt_6m\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"0.0384695\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.019466257\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idnbankloanm1applyorgnumt\" operator=\"lessThan\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.065368585\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_a_bad_abs_top_avg\" operator=\"greaterOrEqual\" value=\"0.2175\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.020545501\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\" operator=\"greaterOrEqual\" value=\"1.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.036211066\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"sp_s_sum_user_sp_alipay_pay_succ_amt_6m\" operator=\"greaterOrEqual\" value=\"30.1\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.037022565\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_a_bad_abs_top_avg\" operator=\"lessThan\" value=\"0.3075\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.01607952\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_cc_limit_avg_head3_plus_tail3\" operator=\"lessThan\" value=\"0.7195\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.004786842\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_t2_chuxing_che_youche\" operator=\"greaterOrEqual\" value=\"-9.536743E-7\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.0020443657\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_credit_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"3.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.09557494\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paycftsuccamt_o_payamt_360d\" operator=\"greaterOrEqual\" value=\"0.23097785\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.07004973\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_limit_normal_sum\" operator=\"greaterOrEqual\" value=\"4799.0\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.0384695\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"unsquare_consume_balance\" operator=\"lessThan\" value=\"11369.0\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.01607952\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_max_account_active_range_days\" operator=\"greaterOrEqual\" value=\"391.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.027274512\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_a_bad_abs_top_avg\" operator=\"lessThan\" value=\"0.0785\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"56\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_all_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_limit_normal_sum\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"unsquare_consume_balance\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_a_bad_abs_top_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_ever_amt_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"qry_times_self_l1st\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"sp_s_sum_user_sp_alipay_pay_succ_amt_6m\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"consumerloan_times_avg\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"0.017227406\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.06078046\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_limit_normal_sum\" operator=\"greaterOrEqual\" value=\"297006.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.015097986\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"qry_times_self_l1st\" operator=\"greaterOrEqual\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.026766311\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_limit_normal_sum\" operator=\"lessThan\" value=\"526149.0\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.04032109\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_a_bad_abs_top_avg\" operator=\"greaterOrEqual\" value=\"0.0275\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.04032109\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\" operator=\"greaterOrEqual\" value=\"0.15485\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.015097986\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"sp_s_sum_user_sp_alipay_pay_succ_amt_6m\" operator=\"greaterOrEqual\" value=\"31.025\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.0032626344\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_all_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"13.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.00918031\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"lessThan\" value=\"0.855\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.00918031\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_a_bad_abs_top_avg\" operator=\"lessThan\" value=\"0.12650001\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.06866651\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"unsquare_consume_balance\" operator=\"greaterOrEqual\" value=\"11153.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.022456115\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"consumerloan_times_avg\" operator=\"lessThan\" value=\"13.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.0032626344\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_ever_amt_max\" operator=\"greaterOrEqual\" value=\"5998.5\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"57\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paycftsuccamt_o_payamt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_limit_normal_sum\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_cc_limit_avg_head3_plus_tail3\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_a_bad_abs_top_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"wm_add_r_user_wm_add_xiuxianyule_o_total\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_credit_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_v_user_acc_visit_week_cnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"overduehighestmonthlyofloan\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_delq_l12m_lvl1p_times_v2\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_s_max_user_pay_meishi_succ_amt_360d\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"0.0071783448\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.07059978\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"wm_add_r_user_wm_add_xiuxianyule_o_total\" operator=\"greaterOrEqual\" value=\"0.037550002\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.0071783448\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_v_user_acc_visit_week_cnt_360d\" operator=\"greaterOrEqual\" value=\"26.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.026993461\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"overduehighestmonthlyofloan\" operator=\"greaterOrEqual\" value=\"-1.0E-6\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.017085902\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_limit_normal_sum\" operator=\"greaterOrEqual\" value=\"258550.0\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.017085902\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"greaterOrEqual\" value=\"1.005\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.10551285\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_cc_limit_avg_head3_plus_tail3\" operator=\"lessThan\" value=\"0.0365\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.027579859\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_delq_l12m_lvl1p_times_v2\" operator=\"lessThan\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.08135677\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_a_bad_abs_top_avg\" operator=\"greaterOrEqual\" value=\"0.2175\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.042535115\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_a_bad_abs_top_avg\" operator=\"lessThan\" value=\"0.3865\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.022170305\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_cc_limit_avg_head3_plus_tail3\" operator=\"lessThan\" value=\"0.3565\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.05083835\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paycftsuccamt_o_payamt_360d\" operator=\"greaterOrEqual\" value=\"0.14710048\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.022170305\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_s_max_user_pay_meishi_succ_amt_360d\" operator=\"greaterOrEqual\" value=\"16737.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.0069119334\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_credit_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"6.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.0069119334\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"lessThan\" value=\"0.865\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"58\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paycftsuccamt_o_payamt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_cc_limit_avg_head3_plus_tail3\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_mob_max_now\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"overduehighestmonthlyofloan\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankp2pm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_100p_cnt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_p_user_regday\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_amt_l6th_creditloan\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"consumerloan_times_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_a_b_c\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.009599997\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.014922542\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_100p_cnt\" operator=\"greaterOrEqual\" value=\"1.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.06574268\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_mob_max_now\" operator=\"lessThan\" value=\"56.245\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.06185861\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\" operator=\"lessThan\" value=\"0.09607692\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.036043562\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankp2pm3applyorgnumt\" operator=\"lessThan\" value=\"1.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.1101806\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"overduehighestmonthlyofloan\" operator=\"greaterOrEqual\" value=\"-1.0E-6\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.036043562\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_amt_l6th_creditloan\" operator=\"greaterOrEqual\" value=\"20354.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.009599997\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regday\" operator=\"greaterOrEqual\" value=\"1261.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.041645594\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"consumerloan_times_avg\" operator=\"lessThan\" value=\"12.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.019420344\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankp2pm3applyorgnumt\" operator=\"greaterOrEqual\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.019420344\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a_b_c\" operator=\"greaterOrEqual\" value=\"8.0835495\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.014922542\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paycftsuccamt_o_payamt_360d\" operator=\"greaterOrEqual\" value=\"0.4006794\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.005055814\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_cc_limit_avg_head3_plus_tail3\" operator=\"greaterOrEqual\" value=\"0.2135\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.005055814\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"greaterOrEqual\" value=\"0.885\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"59\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"accfd_now_pay\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankalld7applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"unsquare_consume_balance\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_repay_actual\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankallm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_mob_max_now\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankp2pm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"consumerloan_times_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_mob_internet_min_v3\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"0.014864537\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.07693726\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"accfd_now_pay\" operator=\"greaterOrEqual\" value=\"2938.75\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.021485656\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\" operator=\"greaterOrEqual\" value=\"1.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.040986538\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\" operator=\"lessThan\" value=\"0.20335001\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.029392954\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"accfd_now_pay\" operator=\"lessThan\" value=\"4453.5703\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.05444475\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankalld7applyorgnumt\" operator=\"greaterOrEqual\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.040986538\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_mob_max_now\" operator=\"lessThan\" value=\"63.114998\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.05444475\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"unsquare_consume_balance\" operator=\"greaterOrEqual\" value=\"999.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.07916207\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankp2pm3applyorgnumt\" operator=\"greaterOrEqual\" value=\"2.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.038570084\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankallm3applyorgnumt\" operator=\"lessThan\" value=\"7.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.016070405\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_repay_actual\" operator=\"greaterOrEqual\" value=\"90.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.04108072\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_repay_actual\" operator=\"greaterOrEqual\" value=\"709.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.0028559633\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_mob_internet_min_v3\" operator=\"lessThan\" value=\"3.275\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.021485656\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"consumerloan_times_avg\" operator=\"lessThan\" value=\"8.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.0028559633\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_avg\" operator=\"lessThan\" value=\"0.485\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"60\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paycftsuccamt_o_payamt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankalld7applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_repay_actual\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellallallm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_credit_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"acc_avg_account_reg_days\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_p_user_regday\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_amt_l6th_creditloan\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_s_max_user_pay_meishi_succ_amt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_mob_internet_min_v3\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.007899843\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.14874873\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paycftsuccamt_o_payamt_360d\" operator=\"greaterOrEqual\" value=\"0.9272417\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.053095818\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_repay_actual\" operator=\"greaterOrEqual\" value=\"322.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.038349308\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellallallm3applyorgnumt\" operator=\"lessThan\" value=\"5.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.023602795\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regday\" operator=\"greaterOrEqual\" value=\"603.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.069172576\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"0.17445652\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.05616419\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_avg_account_reg_days\" operator=\"greaterOrEqual\" value=\"621.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.01604173\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankalld7applyorgnumt\" operator=\"greaterOrEqual\" value=\"1.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.01604173\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_s_max_user_pay_meishi_succ_amt_360d\" operator=\"greaterOrEqual\" value=\"24551.0\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.008480666\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_mob_internet_min_v3\" operator=\"lessThan\" value=\"6.955\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.023602795\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_amt_l6th_creditloan\" operator=\"greaterOrEqual\" value=\"-130.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.025458846\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"lessThan\" value=\"0.955\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.007899843\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\" operator=\"greaterOrEqual\" value=\"0.12035\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.008480666\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_credit_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"3.5\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"61\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_all_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"unsquare_consume_balance\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_repay_actual\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_a_bad_abs_top_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_ever_amt_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_amt_l6th_creditloan\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"consumerloan_times_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_a_b_c\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_mob_internet_min_v3\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"0.012995267\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.039351672\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a_b_c\" operator=\"greaterOrEqual\" value=\"7.86865\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.024212867\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\" operator=\"greaterOrEqual\" value=\"2.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.017368887\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_all_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"3.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.010524904\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_amt_l6th_creditloan\" operator=\"greaterOrEqual\" value=\"-2178.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.024212867\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_a_bad_abs_top_avg\" operator=\"lessThan\" value=\"0.2155\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.073261835\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_avg\" operator=\"lessThan\" value=\"0.315\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.12419686\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_amt_l6th_creditloan\" operator=\"greaterOrEqual\" value=\"22120.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.035035662\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"consumerloan_times_avg\" operator=\"lessThan\" value=\"20.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.012995267\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_ever_amt_max\" operator=\"greaterOrEqual\" value=\"146740.0\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.05568229\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_ever_amt_max\" operator=\"greaterOrEqual\" value=\"111116.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.0016488296\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_repay_actual\" operator=\"greaterOrEqual\" value=\"1623.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.010524904\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"unsquare_consume_balance\" operator=\"lessThan\" value=\"11427.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.0016488296\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_mob_internet_min_v3\" operator=\"lessThan\" value=\"8.045\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"62\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_all_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"unsquare_consume_balance\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"wm_add_r_user_wm_add_xiuxianyule_o_total\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankallm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_v_user_acc_visit_week_cnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_mob_max_now\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankp2pm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_amt_l6th_creditloan\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"consumerloan_times_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_mob_internet_min_v3\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.0013571959\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.086106636\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankp2pm3applyorgnumt\" operator=\"greaterOrEqual\" value=\"1.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.01862794\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_mob_internet_min_v3\" operator=\"lessThan\" value=\"16.115\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.01862794\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankallm3applyorgnumt\" operator=\"lessThan\" value=\"7.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.0048477883\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"wm_add_r_user_wm_add_xiuxianyule_o_total\" operator=\"lessThan\" value=\"0.05705\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.030755568\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_amt_l6th_creditloan\" operator=\"greaterOrEqual\" value=\"-16.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.030755568\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_mob_max_now\" operator=\"greaterOrEqual\" value=\"9.434999\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.05530759\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_all_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"17.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.00756218\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"consumerloan_times_avg\" operator=\"lessThan\" value=\"9.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.017393064\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_mob_internet_min_v3\" operator=\"lessThan\" value=\"5.335\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.03636954\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"unsquare_consume_balance\" operator=\"lessThan\" value=\"1926.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.017393064\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"0.70185184\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.00756218\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_v_user_acc_visit_week_cnt_360d\" operator=\"greaterOrEqual\" value=\"44.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.0013571959\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_amt_l6th_creditloan\" operator=\"greaterOrEqual\" value=\"17043.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.0048477883\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\" operator=\"greaterOrEqual\" value=\"0.01185\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"63\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"accfd_now_pay\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paycftsuccamt_o_payamt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_cc_limit_avg_head3_plus_tail3\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_a\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankloanm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_credit_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"acc_avg_account_reg_days\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idnbankallm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_amt_l6th_creditloan\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_s_max_user_pay_meishi_succ_amt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_mob_internet_min_v3\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.002613191\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.025993293\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"accfd_now_pay\" operator=\"lessThan\" value=\"136.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.0705108\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_credit_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"4.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.1098847\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a\" operator=\"lessThan\" value=\"1.9965999\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.051067717\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paycftsuccamt_o_payamt_360d\" operator=\"lessThan\" value=\"0.29068458\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.0467926\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_amt_l6th_creditloan\" operator=\"greaterOrEqual\" value=\"2184.0\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.025993293\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankloanm3applyorgnumt\" operator=\"greaterOrEqual\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.016216312\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_mob_internet_min_v3\" operator=\"lessThan\" value=\"2.63\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.006439328\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idnbankallm3applyorgnumt\" operator=\"lessThan\" value=\"7.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.016216312\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_cc_limit_avg_head3_plus_tail3\" operator=\"greaterOrEqual\" value=\"0.7185\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.006439328\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\" operator=\"greaterOrEqual\" value=\"2.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.002613191\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_avg_account_reg_days\" operator=\"greaterOrEqual\" value=\"811.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.021019178\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_s_max_user_pay_meishi_succ_amt_360d\" operator=\"greaterOrEqual\" value=\"9850.5\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"64\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paycftsuccamt_o_payamt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_limit_normal_sum\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_repay_actual\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_a_bad_abs_top_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_a\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_credit_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_v_user_acc_visit_week_cnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_amt_l6th_creditloan\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"creditloan_times_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"consumerloan_times_avg\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"0.01636989\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.01636989\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\" operator=\"greaterOrEqual\" value=\"5.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.088460624\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_amt_l6th_creditloan\" operator=\"greaterOrEqual\" value=\"25137.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.058620002\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_v_user_acc_visit_week_cnt_360d\" operator=\"lessThan\" value=\"46.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.031567626\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_limit_normal_sum\" operator=\"greaterOrEqual\" value=\"5441.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.031567626\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_credit_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"7.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.057262026\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_a_bad_abs_top_avg\" operator=\"greaterOrEqual\" value=\"0.26749998\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.02148323\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"consumerloan_times_avg\" operator=\"greaterOrEqual\" value=\"14.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.035497468\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paycftsuccamt_o_payamt_360d\" operator=\"greaterOrEqual\" value=\"0.35176146\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.012725757\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a\" operator=\"greaterOrEqual\" value=\"1.7768\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.0035911766\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"creditloan_times_avg\" operator=\"greaterOrEqual\" value=\"11.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.0035911766\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_repay_actual\" operator=\"greaterOrEqual\" value=\"3237.5\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"65\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paycftsuccamt_o_payamt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_limit_normal_sum\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_cc_limit_avg_head3_plus_tail3\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_repay_actual\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_a_bad_abs_top_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellallallm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_a\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"unsquare_consume_balance_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"overduehighestmonthlyofloan\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"sp_s_sum_user_sp_alipay_pay_succ_amt_6m\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"0.0068838466\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.02958095\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_repay_actual\" operator=\"greaterOrEqual\" value=\"11987.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.044099115\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"unsquare_consume_balance_max\" operator=\"lessThan\" value=\"11117.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.06636504\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellallallm3applyorgnumt\" operator=\"lessThan\" value=\"4.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.044099115\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paycftsuccamt_o_payamt_360d\" operator=\"greaterOrEqual\" value=\"0.37104928\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.02958095\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\" operator=\"greaterOrEqual\" value=\"0.00995\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.015913596\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_limit_normal_sum\" operator=\"lessThan\" value=\"445142.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.06215317\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"overduehighestmonthlyofloan\" operator=\"greaterOrEqual\" value=\"-1.0E-6\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.030243242\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_avg\" operator=\"lessThan\" value=\"2.025\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.0070684273\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a\" operator=\"greaterOrEqual\" value=\"2.00265\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.18518178\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_repay_actual\" operator=\"lessThan\" value=\"572.0\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.015913596\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"sp_s_sum_user_sp_alipay_pay_succ_amt_6m\" operator=\"greaterOrEqual\" value=\"15.82\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.00679028\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_a_bad_abs_top_avg\" operator=\"lessThan\" value=\"0.13749999\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.00679028\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_cc_limit_avg_head3_plus_tail3\" operator=\"greaterOrEqual\" value=\"0.56850004\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"66\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_all_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_repay_actual\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"unsquare_consume_balance_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_mob_max_now\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"overduehighestmonthlyofloan\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"sp_s_sum_user_sp_alipay_pay_succ_amt_6m\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"consumerloan_times_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_s_max_user_pay_meishi_succ_amt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_mob_internet_min_v3\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-6.306752E-4\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.024188826\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_mob_max_now\" operator=\"greaterOrEqual\" value=\"79.630005\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.082720265\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\" operator=\"lessThan\" value=\"0.008048322\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.061720245\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_s_max_user_pay_meishi_succ_amt_360d\" operator=\"lessThan\" value=\"36374.0\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.03337839\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_all_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"8.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.024188826\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"consumerloan_times_avg\" operator=\"greaterOrEqual\" value=\"9.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.014999264\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"sp_s_sum_user_sp_alipay_pay_succ_amt_6m\" operator=\"lessThan\" value=\"380.25\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.03337839\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_mob_internet_min_v3\" operator=\"lessThan\" value=\"17.695\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.04295583\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"overduehighestmonthlyofloan\" operator=\"greaterOrEqual\" value=\"-1.0E-6\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.008144911\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_mob_max_now\" operator=\"greaterOrEqual\" value=\"13.045\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.026396485\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_mob_max_now\" operator=\"lessThan\" value=\"41.695\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.1687158\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_mob_internet_min_v3\" operator=\"greaterOrEqual\" value=\"15.174999\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.008144911\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"unsquare_consume_balance_max\" operator=\"greaterOrEqual\" value=\"5066.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-3.064908E-4\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"consumerloan_times_avg\" operator=\"lessThan\" value=\"7.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.014999264\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_repay_actual\" operator=\"greaterOrEqual\" value=\"657.5\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"67\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"mortgageloan_repay_actual\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_all_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_limit_normal_sum\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paycftsuccamt_o_payamt_180d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankallm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankloanm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"acc_avg_account_reg_days\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_amt_l6th_creditloan\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"consumerloan_times_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_mob_internet_min_v3\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.010671387\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.16212282\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paycftsuccamt_o_payamt_180d\" operator=\"greaterOrEqual\" value=\"0.9464892\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.06025565\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_avg\" operator=\"lessThan\" value=\"2.1\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.016972175\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_mob_internet_min_v3\" operator=\"lessThan\" value=\"16.79\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.0320696\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankloanm3applyorgnumt\" operator=\"greaterOrEqual\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.0320696\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_avg_account_reg_days\" operator=\"greaterOrEqual\" value=\"686.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.06025565\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_limit_normal_sum\" operator=\"greaterOrEqual\" value=\"2899.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.013842154\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"mortgageloan_repay_actual\" operator=\"greaterOrEqual\" value=\"1251.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.06329274\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\" operator=\"lessThan\" value=\"0.13395\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.0290404\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankallm3applyorgnumt\" operator=\"greaterOrEqual\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.02470789\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_mob_internet_min_v3\" operator=\"lessThan\" value=\"2.145\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.016972175\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_amt_l6th_creditloan\" operator=\"greaterOrEqual\" value=\"19899.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.006762316\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"consumerloan_times_avg\" operator=\"lessThan\" value=\"7.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.006762316\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_all_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"13.5\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"68\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"accfd_now_pay\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idnbankotherloworglowconcernt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_repay_actual\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_amt_mbsloan_unsquare_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paycftsuccamt_o_payamt_180d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankallm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"acc_avg_account_reg_days\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"creditloan_times_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_mob_internet_min_v3\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"0.005040046\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.023059284\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idnbankotherloworglowconcernt\" operator=\"greaterOrEqual\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.023059284\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_mob_internet_min_v3\" operator=\"lessThan\" value=\"13.08\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.014049665\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"creditloan_times_avg\" operator=\"lessThan\" value=\"13.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.005040046\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankallm3applyorgnumt\" operator=\"lessThan\" value=\"5.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.014049665\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"accfd_now_pay\" operator=\"greaterOrEqual\" value=\"1803.125\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.051750936\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\" operator=\"lessThan\" value=\"0.22792208\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.13787991\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paycftsuccamt_o_payamt_180d\" operator=\"greaterOrEqual\" value=\"0.3705283\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.051750936\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_avg_account_reg_days\" operator=\"lessThan\" value=\"517.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.005040046\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_amt_mbsloan_unsquare_max\" operator=\"greaterOrEqual\" value=\"112853.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.058239784\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"creditloan_times_avg\" operator=\"lessThan\" value=\"20.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.029922973\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_repay_actual\" operator=\"lessThan\" value=\"12324.0\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.008762566\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankallm3applyorgnumt\" operator=\"lessThan\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.032782268\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_avg_account_reg_days\" operator=\"greaterOrEqual\" value=\"735.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.007730833\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"lessThan\" value=\"0.865\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"69\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"mortgageloan_repay_actual\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankalld7applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idnbankotherloworglowconcernt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_repay_actual\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_a\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"sp_s_sum_user_sp_alipay_pay_succ_amt_6m\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_amt_l6th_creditloan\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"creditloan_times_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_s_max_user_pay_meishi_succ_amt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_mob_internet_min_v3\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"0.0029512015\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.021510074\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\" operator=\"greaterOrEqual\" value=\"2.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.058619503\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_amt_l6th_creditloan\" operator=\"greaterOrEqual\" value=\"15559.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.021510074\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"creditloan_times_avg\" operator=\"lessThan\" value=\"13.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.047910888\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_s_max_user_pay_meishi_succ_amt_360d\" operator=\"lessThan\" value=\"8800.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.10167352\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a\" operator=\"lessThan\" value=\"2.49075\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.011356903\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_mob_internet_min_v3\" operator=\"lessThan\" value=\"7.955\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.0029512015\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idnbankotherloworglowconcernt\" operator=\"lessThan\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.011356903\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"sp_s_sum_user_sp_alipay_pay_succ_amt_6m\" operator=\"greaterOrEqual\" value=\"20.05\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.033225365\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"mortgageloan_repay_actual\" operator=\"greaterOrEqual\" value=\"2072.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.055610873\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\" operator=\"lessThan\" value=\"0.048699997\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.033225365\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"greaterOrEqual\" value=\"1.005\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.019952022\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_repay_actual\" operator=\"lessThan\" value=\"5564.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.0069210744\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"lessThan\" value=\"0.845\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.019952022\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankalld7applyorgnumt\" operator=\"lessThan\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.0069210744\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a\" operator=\"greaterOrEqual\" value=\"3.3906498\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"70\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"accfd_now_pay\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_all_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paycftsuccamt_o_payamt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_limit_normal_sum\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"wm_add_r_user_wm_add_xiuxianyule_o_total\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paycftsuccamt_o_payamt_180d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"unsquare_consume_balance_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_mob_max_now\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"acc_avg_account_reg_days\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"overduehighestmonthlyofloan\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankp2pm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_p_user_regday\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"creditloan_times_avg\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"0.006001737\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.015628736\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_avg_account_reg_days\" operator=\"greaterOrEqual\" value=\"414.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.07319045\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"accfd_now_pay\" operator=\"greaterOrEqual\" value=\"2990.835\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.03432316\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_all_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"16.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.020020595\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paycftsuccamt_o_payamt_180d\" operator=\"greaterOrEqual\" value=\"0.084439725\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.04104646\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"accfd_now_pay\" operator=\"lessThan\" value=\"6402.085\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.006001737\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"overduehighestmonthlyofloan\" operator=\"greaterOrEqual\" value=\"-1.0E-6\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-8.0748973E-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_mob_max_now\" operator=\"greaterOrEqual\" value=\"53.885002\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-8.0748973E-4\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankp2pm3applyorgnumt\" operator=\"greaterOrEqual\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.048075248\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regday\" operator=\"lessThan\" value=\"276.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.110764615\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paycftsuccamt_o_payamt_360d\" operator=\"greaterOrEqual\" value=\"0.15154135\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.052094884\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_limit_normal_sum\" operator=\"greaterOrEqual\" value=\"4434.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.028735641\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"unsquare_consume_balance_max\" operator=\"lessThan\" value=\"2681.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.028735641\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"unsquare_consume_balance_max\" operator=\"greaterOrEqual\" value=\"8845.0\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.01736869\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"creditloan_times_avg\" operator=\"lessThan\" value=\"11.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.01736869\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"wm_add_r_user_wm_add_xiuxianyule_o_total\" operator=\"greaterOrEqual\" value=\"0.00835\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"71\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"unsquare_consume_balance\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paycftsuccamt_o_payamt_180d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"qry_times_self_l1st\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_mob_max_now\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"acc_avg_account_reg_days\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"overduehighestmonthlyofloan\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_amt_l6th_creditloan\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_s_max_user_pay_meishi_succ_amt_360d\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"0.004590287\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.028943496\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"qry_times_self_l1st\" operator=\"greaterOrEqual\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.028943496\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_mob_max_now\" operator=\"lessThan\" value=\"67.695\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.043051463\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_avg_account_reg_days\" operator=\"lessThan\" value=\"939.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.08625567\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\" operator=\"greaterOrEqual\" value=\"3.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.015714437\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paycftsuccamt_o_payamt_180d\" operator=\"lessThan\" value=\"0.4878544\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.06208791\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_mob_max_now\" operator=\"greaterOrEqual\" value=\"79.92\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.026779769\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_amt_l6th_creditloan\" operator=\"greaterOrEqual\" value=\"28799.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.015376632\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_s_max_user_pay_meishi_succ_amt_360d\" operator=\"lessThan\" value=\"20907.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.032200046\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\" operator=\"lessThan\" value=\"0.89181286\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.015714437\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"overduehighestmonthlyofloan\" operator=\"greaterOrEqual\" value=\"-1.0E-6\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.004590287\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_mob_max_now\" operator=\"greaterOrEqual\" value=\"41.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.010598696\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"unsquare_consume_balance\" operator=\"lessThan\" value=\"6739.5\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"72\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_t2_chuxing_che_youche\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"accfd_now_pay\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_all_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankalld7applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_limit_normal_sum\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_cc_limit_avg_head3_plus_tail3\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_mob_max_now\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"acc_avg_account_reg_days\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_p_user_regday\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"consumerloan_times_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_s_max_user_pay_meishi_succ_amt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_mob_internet_min_v3\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"4.406725E-4\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.02695139\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_t2_chuxing_che_youche\" operator=\"greaterOrEqual\" value=\"-9.536743E-7\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.06536458\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\" operator=\"lessThan\" value=\"0.016849998\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.038856518\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankalld7applyorgnumt\" operator=\"greaterOrEqual\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.02695139\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_mob_internet_min_v3\" operator=\"greaterOrEqual\" value=\"1.405\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.038856518\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"greaterOrEqual\" value=\"0.945\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.019109182\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"greaterOrEqual\" value=\"0.815\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.011266973\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_limit_normal_sum\" operator=\"lessThan\" value=\"329749.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.019109182\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"consumerloan_times_avg\" operator=\"greaterOrEqual\" value=\"11.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.03811422\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_cc_limit_avg_head3_plus_tail3\" operator=\"lessThan\" value=\"0.7235\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.08185037\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"accfd_now_pay\" operator=\"lessThan\" value=\"2928.87\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.03811422\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_avg_account_reg_days\" operator=\"greaterOrEqual\" value=\"620.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.0113803465\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regday\" operator=\"greaterOrEqual\" value=\"327.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.008780892\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_all_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"16.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"4.406725E-4\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_mob_max_now\" operator=\"greaterOrEqual\" value=\"66.115\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.011266973\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_s_max_user_pay_meishi_succ_amt_360d\" operator=\"greaterOrEqual\" value=\"9877.5\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"73\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paycftsuccamt_o_payamt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankalld7applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"unsquare_consume_balance\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"wm_add_r_user_wm_add_xiuxianyule_o_total\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_100p_cnt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_amt_l6th_creditloan\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"consumerloan_times_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_a_b_c\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_mob_internet_min_v3\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"0.015489008\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.0010827563\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"wm_add_r_user_wm_add_xiuxianyule_o_total\" operator=\"lessThan\" value=\"0.05705\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.05805734\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a_b_c\" operator=\"greaterOrEqual\" value=\"9.06015\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.019044215\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paycftsuccamt_o_payamt_360d\" operator=\"greaterOrEqual\" value=\"0.44387975\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.032103423\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\" operator=\"greaterOrEqual\" value=\"2.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.019044215\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankalld7applyorgnumt\" operator=\"lessThan\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.0010827563\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\" operator=\"greaterOrEqual\" value=\"0.01075\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.005418151\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_amt_l6th_creditloan\" operator=\"greaterOrEqual\" value=\"-99.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.015489008\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_mob_internet_min_v3\" operator=\"lessThan\" value=\"5.08\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.005418151\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"unsquare_consume_balance\" operator=\"lessThan\" value=\"9204.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.01045358\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_amt_l6th_creditloan\" operator=\"greaterOrEqual\" value=\"20210.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.01045358\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"consumerloan_times_avg\" operator=\"lessThan\" value=\"6.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.072471224\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_100p_cnt\" operator=\"greaterOrEqual\" value=\"1.5\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.041954227\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\" operator=\"lessThan\" value=\"0.26794875\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"74\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"unsquare_consume_balance\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_repay_actual\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"unsquare_consume_balance_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"sp_s_sum_user_sp_alipay_pay_succ_amt_6m\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_amt_l6th_creditloan\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"creditloan_times_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_ab\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_mob_internet_min_v3\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"0.008174174\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.026126793\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_ab\" operator=\"greaterOrEqual\" value=\"10.95745\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.07597464\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_repay_actual\" operator=\"greaterOrEqual\" value=\"5534.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.043075282\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\" operator=\"greaterOrEqual\" value=\"0.053999998\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.016221758\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"unsquare_consume_balance_max\" operator=\"greaterOrEqual\" value=\"2624.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.043075282\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_mob_internet_min_v3\" operator=\"lessThan\" value=\"16.855\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.017195452\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"unsquare_consume_balance\" operator=\"greaterOrEqual\" value=\"9204.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.008174174\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"creditloan_times_avg\" operator=\"lessThan\" value=\"7.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.017195452\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d\" operator=\"greaterOrEqual\" value=\"0.13232574\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.03601645\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_amt_l6th_creditloan\" operator=\"greaterOrEqual\" value=\"10011.0\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.016221758\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_repay_actual\" operator=\"greaterOrEqual\" value=\"1371.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.0042167455\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_amt_l6th_creditloan\" operator=\"greaterOrEqual\" value=\"19742.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.0042167455\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"sp_s_sum_user_sp_alipay_pay_succ_amt_6m\" operator=\"greaterOrEqual\" value=\"3.975\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"75\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_limit_normal_sum\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_repay_actual\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paycftsuccamt_o_payamt_180d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_mob_max_now\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"overduehighestmonthlyofloan\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"sp_s_sum_user_sp_alipay_pay_succ_amt_6m\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idnbankallm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_amt_l6th_creditloan\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"consumerloan_times_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_a_b_c\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"0.0069991867\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.024684625\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_repay_actual\" operator=\"greaterOrEqual\" value=\"10523.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.07468021\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"consumerloan_times_avg\" operator=\"lessThan\" value=\"5.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.056873422\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"sp_s_sum_user_sp_alipay_pay_succ_amt_6m\" operator=\"lessThan\" value=\"408.7\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.036509044\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paycftsuccamt_o_payamt_180d\" operator=\"greaterOrEqual\" value=\"0.113137335\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.024684625\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_amt_l6th_creditloan\" operator=\"greaterOrEqual\" value=\"5499.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.012825284\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_limit_normal_sum\" operator=\"lessThan\" value=\"445358.0\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.036509044\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idnbankallm3applyorgnumt\" operator=\"lessThan\" value=\"3.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.04045389\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_amt_l6th_creditloan\" operator=\"greaterOrEqual\" value=\"38799.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.018492697\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"consumerloan_times_avg\" operator=\"lessThan\" value=\"13.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.04045389\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_limit_normal_sum\" operator=\"lessThan\" value=\"87702.0\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.07559129\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_mob_max_now\" operator=\"lessThan\" value=\"77.335\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.018492697\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"overduehighestmonthlyofloan\" operator=\"greaterOrEqual\" value=\"97.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.007996931\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_mob_max_now\" operator=\"greaterOrEqual\" value=\"36.695\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.008781141\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a_b_c\" operator=\"greaterOrEqual\" value=\"4.4464\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"76\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_limit_normal_sum\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"unsquare_consume_balance\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_repay_actual\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"unsquare_consume_times_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_credit_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_mob_max_now\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_100p_cnt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_p_user_regday\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"creditloan_times_avg\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"0.0039125686\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.012362965\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_100p_cnt\" operator=\"greaterOrEqual\" value=\"1.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.024919577\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_mob_max_now\" operator=\"lessThan\" value=\"73.435\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.037295997\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_credit_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"8.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.059114687\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regday\" operator=\"lessThan\" value=\"1387.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.037295997\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"unsquare_consume_balance\" operator=\"greaterOrEqual\" value=\"5313.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.019774606\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"creditloan_times_avg\" operator=\"greaterOrEqual\" value=\"13.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.01731612\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_limit_normal_sum\" operator=\"greaterOrEqual\" value=\"423702.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.05276965\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"creditloan_times_avg\" operator=\"lessThan\" value=\"18.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.028761603\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\" operator=\"greaterOrEqual\" value=\"0.053549998\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.012362965\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"unsquare_consume_balance\" operator=\"greaterOrEqual\" value=\"11473.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.0044033416\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"unsquare_consume_times_avg\" operator=\"lessThan\" value=\"14.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.01284308\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_repay_actual\" operator=\"greaterOrEqual\" value=\"665.5\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"77\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paycftsuccamt_o_payamt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankalld7applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"acc_max_account_active_range_days\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_a_bad_abs_top_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"unsquare_consume_balance_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_mob_max_now\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_a_b_c\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_s_max_user_pay_meishi_succ_amt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_mob_internet_min_v3\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"0.0016019063\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.033816725\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankalld7applyorgnumt\" operator=\"greaterOrEqual\" value=\"2.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.057313234\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_max_account_active_range_days\" operator=\"lessThan\" value=\"899.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.079098575\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"unsquare_consume_balance_max\" operator=\"greaterOrEqual\" value=\"2755.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.033816725\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_mob_internet_min_v3\" operator=\"lessThan\" value=\"11.725\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.017545912\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paycftsuccamt_o_payamt_360d\" operator=\"lessThan\" value=\"0.19291076\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.0045792805\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\" operator=\"greaterOrEqual\" value=\"3.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.017545912\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_s_max_user_pay_meishi_succ_amt_360d\" operator=\"lessThan\" value=\"26003.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.011062596\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a_b_c\" operator=\"greaterOrEqual\" value=\"6.9708996\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.011062596\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_a_bad_abs_top_avg\" operator=\"lessThan\" value=\"0.1165\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.07853156\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_mob_max_now\" operator=\"greaterOrEqual\" value=\"98.335\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.03185074\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_s_max_user_pay_meishi_succ_amt_360d\" operator=\"lessThan\" value=\"36373.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.014634654\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"lessThan\" value=\"0.865\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"78\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"accfd_now_pay\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paycftsuccamt_o_payamt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_a_bad_abs_top_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_mob_max_now\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_amt_l6th_creditloan\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_s_max_user_pay_meishi_succ_amt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_mob_internet_min_v3\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"0.0041167387\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.08797884\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_a_bad_abs_top_avg\" operator=\"lessThan\" value=\"-0.2945\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.015681395\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_mob_max_now\" operator=\"greaterOrEqual\" value=\"12.825001\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.039588675\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_amt_l6th_creditloan\" operator=\"greaterOrEqual\" value=\"20074.0\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.027635034\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_mob_max_now\" operator=\"lessThan\" value=\"24.630001\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.039588675\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_mob_internet_min_v3\" operator=\"lessThan\" value=\"5.3050003\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.059631668\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"accfd_now_pay\" operator=\"greaterOrEqual\" value=\"2951.0\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.025044234\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_amt_l6th_creditloan\" operator=\"greaterOrEqual\" value=\"24695.0\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.017207827\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_s_max_user_pay_meishi_succ_amt_360d\" operator=\"lessThan\" value=\"18820.0\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.029754864\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paycftsuccamt_o_payamt_360d\" operator=\"greaterOrEqual\" value=\"0.13207102\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.015681395\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"accfd_now_pay\" operator=\"lessThan\" value=\"1802.085\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.006706607\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_mob_max_now\" operator=\"greaterOrEqual\" value=\"90.405\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.010416468\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_mob_internet_min_v3\" operator=\"lessThan\" value=\"3.3049998\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"79\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paycftsuccamt_o_payamt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_cc_limit_avg_head3_plus_tail3\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_repay_actual\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_a_bad_abs_top_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankloanm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_mob_max_now\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"overduehighestmonthlyofloan\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_amt_l6th_creditloan\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"creditloan_times_avg\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.012155516\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.082379855\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankloanm3applyorgnumt\" operator=\"greaterOrEqual\" value=\"1.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.033923794\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_repay_actual\" operator=\"greaterOrEqual\" value=\"531.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.022243394\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"creditloan_times_avg\" operator=\"lessThan\" value=\"7.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.05677414\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paycftsuccamt_o_payamt_360d\" operator=\"greaterOrEqual\" value=\"0.20010376\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.00955338\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_cc_limit_avg_head3_plus_tail3\" operator=\"lessThan\" value=\"0.0475\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.015898388\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_a_bad_abs_top_avg\" operator=\"lessThan\" value=\"0.1695\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.022243394\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_amt_l6th_creditloan\" operator=\"greaterOrEqual\" value=\"-117.0\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.015898388\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paycftsuccamt_o_payamt_360d\" operator=\"greaterOrEqual\" value=\"0.40070862\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.00955338\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"overduehighestmonthlyofloan\" operator=\"greaterOrEqual\" value=\"-1.0E-6\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-2.9689632E-4\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_mob_max_now\" operator=\"greaterOrEqual\" value=\"54.565002\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-2.9689632E-4\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_amt_l6th_creditloan\" operator=\"greaterOrEqual\" value=\"8500.5\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"80\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_p_user_regweek\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankalld7applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idnbankotherloworglowconcernt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_v_user_acc_visit_week_cnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"sp_s_sum_user_sp_alipay_pay_succ_amt_6m\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_100p_cnt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.0054745236\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.10465422\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regweek\" operator=\"lessThan\" value=\"20.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.032945666\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_100p_cnt\" operator=\"lessThan\" value=\"6.0\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.06719958\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\" operator=\"greaterOrEqual\" value=\"0.12735\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.023745578\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"0.3397436\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.03402757\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"sp_s_sum_user_sp_alipay_pay_succ_amt_6m\" operator=\"greaterOrEqual\" value=\"111.04\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.014499584\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"greaterOrEqual\" value=\"0.975\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.0054745236\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d\" operator=\"greaterOrEqual\" value=\"0.00555\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.014499584\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_v_user_acc_visit_week_cnt_360d\" operator=\"lessThan\" value=\"36.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.00623205\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idnbankotherloworglowconcernt\" operator=\"greaterOrEqual\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.023745578\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\" operator=\"lessThan\" value=\"0.43353415\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.00623205\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankalld7applyorgnumt\" operator=\"greaterOrEqual\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"81\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"accfd_now_pay\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_all_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_cc_limit_avg_head3_plus_tail3\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_ever_amt_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paycftsuccamt_o_payamt_180d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"acc_avg_account_reg_days\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"overduehighestmonthlyofloan\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankp2pm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_amt_l6th_creditloan\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.024961172\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.012333574\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\" operator=\"greaterOrEqual\" value=\"5.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.09641879\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"overduehighestmonthlyofloan\" operator=\"greaterOrEqual\" value=\"102.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.058106042\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"accfd_now_pay\" operator=\"lessThan\" value=\"2585.415\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.036674786\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_amt_l6th_creditloan\" operator=\"greaterOrEqual\" value=\"14087.0\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.012333574\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_amt_l6th_creditloan\" operator=\"greaterOrEqual\" value=\"-21.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.00834294\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_avg_account_reg_days\" operator=\"greaterOrEqual\" value=\"406.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.0049508596\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankp2pm3applyorgnumt\" operator=\"greaterOrEqual\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.005177266\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_cc_limit_avg_head3_plus_tail3\" operator=\"greaterOrEqual\" value=\"0.7245\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.020569641\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_all_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"14.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.008792738\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paycftsuccamt_o_payamt_180d\" operator=\"greaterOrEqual\" value=\"0.21568912\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.057645183\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_ever_amt_max\" operator=\"greaterOrEqual\" value=\"99050.0\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"82\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_t2_chuxing_che_youche\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_p_user_regweek\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_cc_limit_avg_head3_plus_tail3\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_repay_actual\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_a_bad_abs_top_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paycftsuccamt_o_payamt_180d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_mob_max_now\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"sp_s_sum_user_sp_alipay_pay_succ_amt_6m\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idnbankallm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_a_b_c\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"0.007847926\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.016841773\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_t2_chuxing_che_youche\" operator=\"greaterOrEqual\" value=\"-9.536743E-7\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.034281217\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_a_bad_abs_top_avg\" operator=\"greaterOrEqual\" value=\"-0.20750001\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.016841773\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idnbankallm3applyorgnumt\" operator=\"greaterOrEqual\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.034281217\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\" operator=\"lessThan\" value=\"0.01155\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.07692962\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_repay_actual\" operator=\"greaterOrEqual\" value=\"1598.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.0080398\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"sp_s_sum_user_sp_alipay_pay_succ_amt_6m\" operator=\"lessThan\" value=\"476.95\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.011676091\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_a_bad_abs_top_avg\" operator=\"lessThan\" value=\"0.1325\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.08198853\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_cc_limit_avg_head3_plus_tail3\" operator=\"lessThan\" value=\"-0.2295\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.03521414\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_mob_max_now\" operator=\"greaterOrEqual\" value=\"2.4650002\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.03521414\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regweek\" operator=\"lessThan\" value=\"25.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.0080398\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a_b_c\" operator=\"greaterOrEqual\" value=\"4.20455\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"8.6535886E-4\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paycftsuccamt_o_payamt_180d\" operator=\"greaterOrEqual\" value=\"0.41355324\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"8.6535886E-4\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_repay_actual\" operator=\"greaterOrEqual\" value=\"5261.5\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"83\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_p_user_regweek\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_all_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_cc_limit_avg_head3_plus_tail3\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_a_bad_abs_top_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_amt_mbsloan_unsquare_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"wm_add_r_user_wm_add_xiuxianyule_o_total\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_v_user_acc_visit_week_cnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"unsquare_consume_balance_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"qry_times_self_l1st\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"overduehighestmonthlyofloan\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_amt_l6th_creditloan\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_mob_internet_min_v3\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.010811678\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.011028534\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"wm_add_r_user_wm_add_xiuxianyule_o_total\" operator=\"greaterOrEqual\" value=\"0.037100002\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.072419286\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_v_user_acc_visit_week_cnt_360d\" operator=\"lessThan\" value=\"36.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.015970059\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_mob_internet_min_v3\" operator=\"lessThan\" value=\"11.405001\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.030080862\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"r_credit_succ_after_query_cnt_o_credit_query_cnt_2y\" operator=\"lessThan\" value=\"0.2967968\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.030080862\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regweek\" operator=\"greaterOrEqual\" value=\"76.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.006087009\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"unsquare_consume_balance_max\" operator=\"lessThan\" value=\"10204.0\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.011028534\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"overduehighestmonthlyofloan\" operator=\"greaterOrEqual\" value=\"29.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.015970059\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_all_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"4.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.025372367\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_a_bad_abs_top_avg\" operator=\"greaterOrEqual\" value=\"0.16049999\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.057371166\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_cc_limit_avg_head3_plus_tail3\" operator=\"greaterOrEqual\" value=\"0.9055\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.025867973\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"greaterOrEqual\" value=\"0.71500003\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.010811678\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"greaterOrEqual\" value=\"0.385\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.010811678\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_amt_mbsloan_unsquare_max\" operator=\"greaterOrEqual\" value=\"147070.0\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.006087009\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"qry_times_self_l1st\" operator=\"greaterOrEqual\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.004856093\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_amt_l6th_creditloan\" operator=\"greaterOrEqual\" value=\"-30.5\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"84\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_all_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_repay_actual\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_amt_mbsloan_unsquare_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_ever_amt_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"wm_add_r_user_wm_add_xiuxianyule_o_total\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"overduehighestmonthlyofloan\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"sp_s_sum_user_sp_alipay_pay_succ_amt_6m\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_amt_l6th_creditloan\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"consumerloan_times_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_s_max_user_pay_meishi_succ_amt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_mob_internet_min_v3\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"0.0072537605\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.017544439\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_amt_l6th_creditloan\" operator=\"greaterOrEqual\" value=\"23999.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.017544439\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_ever_amt_max\" operator=\"greaterOrEqual\" value=\"118140.0\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.0072537605\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"consumerloan_times_avg\" operator=\"lessThan\" value=\"18.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.0123991\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_amt_l6th_creditloan\" operator=\"greaterOrEqual\" value=\"149350.0\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.087951414\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_amt_mbsloan_unsquare_max\" operator=\"greaterOrEqual\" value=\"9402.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.030778773\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_mob_internet_min_v3\" operator=\"lessThan\" value=\"2.21\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.07181331\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"wm_add_r_user_wm_add_xiuxianyule_o_total\" operator=\"greaterOrEqual\" value=\"0.161\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.022778777\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_repay_actual\" operator=\"greaterOrEqual\" value=\"2980.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.007901831\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_all_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"11.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.020659521\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"consumerloan_times_avg\" operator=\"lessThan\" value=\"8.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.047582977\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_s_max_user_pay_meishi_succ_amt_360d\" operator=\"greaterOrEqual\" value=\"16905.0\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.007901831\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"sp_s_sum_user_sp_alipay_pay_succ_amt_6m\" operator=\"greaterOrEqual\" value=\"2.06\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-4.6887458E-4\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"overduehighestmonthlyofloan\" operator=\"greaterOrEqual\" value=\"-1.0E-6\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-4.6887458E-4\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_avg\" operator=\"lessThan\" value=\"0.415\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"85\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_p_user_regweek\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_repay_actual\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellallallm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankallm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankloanm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_mob_max_now\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"acc_avg_account_reg_days\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"sp_s_sum_user_sp_alipay_pay_succ_amt_6m\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_100p_cnt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_amt_l6th_creditloan\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"creditloan_times_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_max\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.0042923475\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.013516327\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regweek\" operator=\"greaterOrEqual\" value=\"197.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.013516327\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"creditloan_times_avg\" operator=\"lessThan\" value=\"10.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.063543536\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"sp_s_sum_user_sp_alipay_pay_succ_amt_6m\" operator=\"greaterOrEqual\" value=\"134.05\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.032975454\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_avg\" operator=\"greaterOrEqual\" value=\"0.315\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.028203897\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankallm3applyorgnumt\" operator=\"lessThan\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.0049383165\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"greaterOrEqual\" value=\"0.895\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.009227322\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellallallm3applyorgnumt\" operator=\"lessThan\" value=\"1.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.009227322\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_avg_account_reg_days\" operator=\"lessThan\" value=\"728.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.02410296\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankloanm3applyorgnumt\" operator=\"greaterOrEqual\" value=\"1.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.044838686\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_repay_actual\" operator=\"lessThan\" value=\"2670.0\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.07996951\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_mob_max_now\" operator=\"lessThan\" value=\"26.115\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.0074512498\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"creditloan_times_avg\" operator=\"greaterOrEqual\" value=\"15.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.02410296\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_amt_l6th_creditloan\" operator=\"greaterOrEqual\" value=\"10017.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.0074512498\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_100p_cnt\" operator=\"greaterOrEqual\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"86\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"accfd_now_pay\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v_all_query_cnt_2y\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_a_bad_abs_top_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_ever_amt_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"wm_add_r_user_wm_add_xiuxianyule_o_total\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paycftsuccamt_o_payamt_180d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_mob_max_now\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_amt_l6th_creditloan\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_max\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"-0.013197201\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.02787668\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"accfd_now_pay\" operator=\"lessThan\" value=\"100.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.07402093\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_amt_l6th_creditloan\" operator=\"greaterOrEqual\" value=\"8594.0\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.047451254\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v_all_query_cnt_2y\" operator=\"greaterOrEqual\" value=\"16.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.018149873\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_ever_amt_max\" operator=\"greaterOrEqual\" value=\"3684.0\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.018149873\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paycftsuccamt_o_payamt_180d\" operator=\"greaterOrEqual\" value=\"0.413602\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.0018351653\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_avg\" operator=\"lessThan\" value=\"0.975\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.009992519\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"wm_add_r_user_wm_add_xiuxianyule_o_total\" operator=\"greaterOrEqual\" value=\"0.01445\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.009992519\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_mob_max_now\" operator=\"greaterOrEqual\" value=\"20.630001\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.006743497\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"greaterOrEqual\" value=\"0.825\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.0018351653\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_mob_max_now\" operator=\"lessThan\" value=\"70.045\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.0676216\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_a_bad_abs_top_avg\" operator=\"greaterOrEqual\" value=\"0.3605\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"87\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"accfd_now_pay\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_r_user_paycftsuccamt_o_payamt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_limit_normal_sum\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_ever_amt_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_v_user_acc_visit_week_cnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"qry_times_self_l1st\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"overduehighestmonthlyofloan\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_amt_l6th_creditloan\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_s_max_user_pay_meishi_succ_amt_360d\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"3.8151606E-4\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.00610242\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_s_max_user_pay_meishi_succ_amt_360d\" operator=\"greaterOrEqual\" value=\"26300.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.06300376\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"accfd_now_pay\" operator=\"greaterOrEqual\" value=\"4453.5703\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.03796535\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_r_user_paycftsuccamt_o_payamt_360d\" operator=\"lessThan\" value=\"0.039322134\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.022002617\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_amt_l6th_creditloan\" operator=\"greaterOrEqual\" value=\"15894.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.022002617\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_v_user_acc_visit_week_cnt_360d\" operator=\"greaterOrEqual\" value=\"48.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.00793919\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"overduehighestmonthlyofloan\" operator=\"greaterOrEqual\" value=\"-1.0E-6\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.08963725\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_limit_normal_sum\" operator=\"lessThan\" value=\"395.0\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.029471036\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"overduehighestmonthlyofloan\" operator=\"lessThan\" value=\"88.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.029471036\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"qry_times_self_l1st\" operator=\"greaterOrEqual\" value=\"0.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.00607536\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_amt_l6th_creditloan\" operator=\"greaterOrEqual\" value=\"8582.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"3.8151606E-4\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_ever_amt_max\" operator=\"greaterOrEqual\" value=\"129101.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.00610242\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_v_user_acc_visit_week_cnt_360d\" operator=\"greaterOrEqual\" value=\"19.5\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"88\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"add_robust_score_a\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"acc_avg_account_reg_days\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idnbankallm3applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_p_user_regday\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_mob_internet_min_v3\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"0.002778045\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.021587055\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idnbankallm3applyorgnumt\" operator=\"greaterOrEqual\" value=\"8.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.06483731\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"greaterOrEqual\" value=\"1.005\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.04907102\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_p_user_regday\" operator=\"lessThan\" value=\"859.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.015408791\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d\" operator=\"greaterOrEqual\" value=\"5.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.009230526\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_mob_internet_min_v3\" operator=\"lessThan\" value=\"1.6949999\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.021587055\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_avg_account_reg_days\" operator=\"lessThan\" value=\"928.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.009436653\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_avg\" operator=\"lessThan\" value=\"0.185\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.03366328\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_avg_account_reg_days\" operator=\"greaterOrEqual\" value=\"722.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.009436653\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"add_robust_score_a\" operator=\"greaterOrEqual\" value=\"3.5222\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"89\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_t2_chuxing_che_youche\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_limit_normal_sum\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"unsquare_consume_balance\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_repay_actual\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_mob_max_now\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"sp_s_sum_user_sp_alipay_pay_succ_amt_6m\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_delq_l12m_lvl1p_times_v2\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"0.0012854143\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.1079713\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_delq_l12m_lvl1p_times_v2\" operator=\"greaterOrEqual\" value=\"1.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.02493404\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_mob_max_now\" operator=\"greaterOrEqual\" value=\"16.630001\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.045049433\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_limit_normal_sum\" operator=\"greaterOrEqual\" value=\"438367.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.024001868\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_repay_actual\" operator=\"lessThan\" value=\"5521.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.012681525\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"sp_s_sum_user_sp_alipay_pay_succ_amt_6m\" operator=\"lessThan\" value=\"222.2\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.024001868\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"greaterOrEqual\" value=\"1.035\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.012142207\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"unsquare_consume_balance\" operator=\"greaterOrEqual\" value=\"35187.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.02493404\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_mob_max_now\" operator=\"lessThan\" value=\"73.755\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.012681525\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_t2_chuxing_che_youche\" operator=\"greaterOrEqual\" value=\"-9.536743E-7\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t\t<Segment id=\"90\">\n\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t<TreeModel functionName=\"regression\" noTrueChildStrategy=\"returnLastPrediction\" x-mathContext=\"float\">\n\t\t\t\t\t\t\t\t<MiningSchema>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"idcellnbankalld7applyorgnumt\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"app_score_v2_cc_limit_avg_head3_plus_tail3\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"acc_max_account_active_range_days\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"ln_repay_actual\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"unsquare_consume_balance_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_mob_max_now\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"creditloan_times_avg\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"cc_usrate_max\"/>\n\t\t\t\t\t\t\t\t\t<MiningField name=\"v2_s_max_user_pay_meishi_succ_amt_360d\"/>\n\t\t\t\t\t\t\t\t</MiningSchema>\n\t\t\t\t\t\t\t\t<Node score=\"9.519879E-4\">\n\t\t\t\t\t\t\t\t\t<True/>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.014107978\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"idcellnbankalld7applyorgnumt\" operator=\"greaterOrEqual\" value=\"1.5\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.027321722\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"acc_max_account_active_range_days\" operator=\"lessThan\" value=\"1064.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.027321722\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"ln_repay_actual\" operator=\"greaterOrEqual\" value=\"1.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.014107978\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"creditloan_times_avg\" operator=\"lessThan\" value=\"14.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"0.057494868\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"creditloan_times_avg\" operator=\"greaterOrEqual\" value=\"7.5\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"0.0070211766\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"unsquare_consume_balance_max\" operator=\"lessThan\" value=\"13197.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.015595889\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"order_all_order_hour_seg_eq_late_night_size_ratio_360d\" operator=\"lessThan\" value=\"0.00785\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.043052327\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"app_score_v2_cc_limit_avg_head3_plus_tail3\" operator=\"greaterOrEqual\" value=\"0.8815\"/>\n\t\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.019450175\">\n\t\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_max\" operator=\"greaterOrEqual\" value=\"1.005\"/>\n\t\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"-0.0043505942\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_s_max_user_pay_meishi_succ_amt_360d\" operator=\"lessThan\" value=\"7711.5\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"-0.0043505942\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_usrate_avg\" operator=\"lessThan\" value=\"0.405\"/>\n\t\t\t\t\t\t\t\t\t\t<Node score=\"9.519879E-4\">\n\t\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"v2_s_max_user_pay_meishi_succ_amt_360d\" operator=\"lessThan\" value=\"9882.0\"/>\n\t\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t\t<Node score=\"0.0070211766\">\n\t\t\t\t\t\t\t\t\t\t<SimplePredicate field=\"cc_mob_max_now\" operator=\"lessThan\" value=\"53.145\"/>\n\t\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t\t</Node>\n\t\t\t\t\t\t\t</TreeModel>\n\t\t\t\t\t\t</Segment>\n\t\t\t\t\t</Segmentation>\n\t\t\t\t</MiningModel>\n\t\t\t</Segment>\n\t\t\t<Segment id=\"2\">\n                <True/>\n                <RegressionModel functionName=\"regression\" normalizationMethod=\"logit\" x-mathContext=\"float\">\n                    <MiningSchema>\n                        <MiningField name=\"xgbValue\"/>\n                    </MiningSchema>\n                    <Output>\n                        <OutputField name=\"xgbProb\" optype=\"continuous\" dataType=\"float\" isFinalResult=\"false\"/>\n                    </Output>\n                    <RegressionTable intercept=\"0\">\n                        <NumericPredictor name=\"xgbValue\" exponent=\"1\" coefficient=\"1\"/>\n                    </RegressionTable>\n                </RegressionModel>\n            </Segment>\n            <Segment id=\"3\">\n                <True/>\n                <RegressionModel functionName=\"regression\">\n                    <MiningSchema>\n                        <MiningField name=\"app_fin_model_a_score_gaia_v2_3\" usageType=\"predicted\" invalidValueTreatment=\"returnInvalid\"/>\n                        <MiningField name=\"xgbProb\" usageType=\"active\" invalidValueTreatment=\"returnInvalid\"/>\n                    </MiningSchema>\n                    <Output>\n                        <OutputField name=\"app_fin_model_a_score_gaia_v2_3\" feature=\"predictedValue\" optype=\"continuous\" dataType=\"integer\"/>\n                        <OutputField name=\"app_fin_model_a_prob_gaia_v2_3\" feature=\"transformedValue\" optype=\"continuous\" dataType=\"float\">\n                            <FieldRef field=\"xgbProb\"/>\n                        </OutputField>\n                    </Output>\n                    <LocalTransformations>\n                        <DerivedField name=\"tmp_score\" dataType=\"integer\" optype=\"continuous\">\n                            <Apply function=\"round\">\n                                <Apply function=\"+\">\n                                    <Constant dataType=\"integer\">370</Constant>\n                                    <Apply function=\"*\">\n                                        <Constant dataType=\"integer\">50</Constant>\n                                        <Apply function=\"ln\">\n                                            <Apply function=\"/\">\n                                                <Apply function=\"-\">\n                                                    <Constant dataType=\"integer\">1</Constant>\n                                                    <FieldRef field=\"xgbProb\"/>\n                                                </Apply>\n                                                <FieldRef field=\"xgbProb\"/>\n                                            </Apply>\n                                        </Apply>\n                                    </Apply>\n                                </Apply>\n                            </Apply>\n                        </DerivedField>\n                    </LocalTransformations>\n                    <RegressionTable intercept=\"0\">\n                        <NumericPredictor name=\"tmp_score\" exponent=\"1\" coefficient=\"1\"/>\n                    </RegressionTable>\n                </RegressionModel>\n            </Segment>\n\t\t</Segmentation>\n\t</MiningModel>\n</PMML>\n",
      "gmtCreate": 1577516182000,
      "gmtModified": 1577516182000,
      "modelName": "sfjlskfjkl",
      "modelDetailInfo": {
        "summary": "Ensemble model",
        "scorable": "true",
        "miningFunction": "REGRESSION",
        "algorithmName": "XGBoost (GBTree)"
      },
      "modelDesc": "sdfdfjlk",
      "modelType": "MiningModel",
      "modelGraph": {
        "id": "modelChain", "nodeName": "modelChain", "subModels": [{
          "id": "sum", "nodeName": "sum", "subModels": [{
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d greaterOrEqual 0.08882314",
                    "id": "-0.21516597",
                    "nodeName": "-0.21516597",
                    "type": "TreeModel"
                  }], "id": "-0.2236566", "nodeName": "-0.2236566", "type": "TreeModel"
                }, {
                  "expression": "idcellnbankallm3applyorgnumt lessThan 6.5",
                  "id": "-0.21172276",
                  "nodeName": "-0.21172276",
                  "type": "TreeModel"
                }], "id": "-0.19179004", "nodeName": "-0.19179004", "type": "TreeModel"
              }, {
                "expression": "acc_max_account_active_range_days greaterOrEqual 821.5",
                "id": "-0.2320185",
                "nodeName": "-0.2320185",
                "type": "TreeModel"
              }, {
                "expression": "idnbankallm3applyorgnumt lessThan 4.5",
                "id": "-0.22783755",
                "nodeName": "-0.22783755",
                "type": "TreeModel"
              }], "id": "-0.2236566", "nodeName": "-0.2236566", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d greaterOrEqual 2.5",
                  "id": "-0.23647043",
                  "nodeName": "-0.23647043",
                  "type": "TreeModel"
                }], "id": "-0.23945513", "nodeName": "-0.23945513", "type": "TreeModel"
              }, {
                "expression": "cc_usrate_max lessThan 0.885",
                "id": "-0.23647043",
                "nodeName": "-0.23647043",
                "type": "TreeModel"
              }], "id": "-0.2320185", "nodeName": "-0.2320185", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d greaterOrEqual 0.09215",
                "id": "-0.24173504",
                "nodeName": "-0.24173504",
                "type": "TreeModel"
              }], "id": "-0.24529679", "nodeName": "-0.24529679", "type": "TreeModel"
            }], "id": "-0.23945513", "nodeName": "-0.23945513", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "order_all_order_hour_seg_eq_late_night_size_ratio_360d lessThan 0.09795",
                    "id": "-0.20587733",
                    "nodeName": "-0.20587733",
                    "type": "TreeModel"
                  }], "id": "-0.2015585", "nodeName": "-0.2015585", "type": "TreeModel"
                }, {
                  "expression": "cc_usrate_avg greaterOrEqual 0.335",
                  "id": "-0.19723967",
                  "nodeName": "-0.19723967",
                  "type": "TreeModel"
                }], "id": "-0.2015585", "nodeName": "-0.2015585", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "v2_p_user_regweek lessThan 84.5",
                  "id": "-0.18694732",
                  "nodeName": "-0.18694732",
                  "type": "TreeModel"
                }], "id": "-0.19723967", "nodeName": "-0.19723967", "type": "TreeModel"
              }, {
                "expression": "order_all_order_hour_seg_eq_late_night_size_ratio_360d lessThan 0.0736",
                "id": "-0.1857749",
                "nodeName": "-0.1857749",
                "type": "TreeModel"
              }], "id": "-0.16499995", "nodeName": "-0.16499995", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "order_all_order_hour_seg_eq_late_night_size_ratio_360d lessThan 0.09235",
                  "id": "-0.21774974",
                  "nodeName": "-0.21774974",
                  "type": "TreeModel"
                }], "id": "-0.21436632", "nodeName": "-0.21436632", "type": "TreeModel"
              }], "id": "-0.21220946", "nodeName": "-0.21220946", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d greaterOrEqual 2.5",
                "id": "-0.2089588",
                "nodeName": "-0.2089588",
                "type": "TreeModel"
              }], "id": "-0.21220946", "nodeName": "-0.21220946", "type": "TreeModel"
            }, {
              "expression": "v2_p_user_regweek greaterOrEqual 151.5",
              "id": "-0.2089588",
              "nodeName": "-0.2089588",
              "type": "TreeModel"
            }], "id": "-0.20587733", "nodeName": "-0.20587733", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d greaterOrEqual 0.10975",
                    "id": "-0.1839414",
                    "nodeName": "-0.1839414",
                    "type": "TreeModel"
                  }], "id": "-0.18892244", "nodeName": "-0.18892244", "type": "TreeModel"
                }, {
                  "expression": "cc_usrate_max greaterOrEqual 0.895",
                  "id": "-0.17922291",
                  "nodeName": "-0.17922291",
                  "type": "TreeModel"
                }], "id": "-0.1839414", "nodeName": "-0.1839414", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d greaterOrEqual 0.037998747",
                  "id": "-0.17254986",
                  "nodeName": "-0.17254986",
                  "type": "TreeModel"
                }], "id": "-0.17922291", "nodeName": "-0.17922291", "type": "TreeModel"
              }, {
                "expression": "ln_mob_internet_min_v3 lessThan 5.045",
                "id": "-0.16967845",
                "nodeName": "-0.16967845",
                "type": "TreeModel"
              }], "id": "-0.15062967", "nodeName": "-0.15062967", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d greaterOrEqual 0.04085",
                  "id": "-0.19315062",
                  "nodeName": "-0.19315062",
                  "type": "TreeModel"
                }], "id": "-0.19589618", "nodeName": "-0.19589618", "type": "TreeModel"
              }, {
                "expression": "v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d greaterOrEqual 0.025594234",
                "id": "-0.19589618",
                "nodeName": "-0.19589618",
                "type": "TreeModel"
              }], "id": "-0.19917518", "nodeName": "-0.19917518", "type": "TreeModel"
            }, {
              "expression": "v_credit_query_cnt_2y greaterOrEqual 2.5",
              "id": "-0.18892244",
              "nodeName": "-0.18892244",
              "type": "TreeModel"
            }], "id": "-0.19315062", "nodeName": "-0.19315062", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "add_robust_score_a_b greaterOrEqual 4.00525",
                    "id": "-0.16712159",
                    "nodeName": "-0.16712159",
                    "type": "TreeModel"
                  }], "id": "-0.16016409", "nodeName": "-0.16016409", "type": "TreeModel"
                }, {
                  "expression": "app_score_v2_a_bad_abs_top_avg lessThan -0.0275",
                  "id": "-0.13699824",
                  "nodeName": "-0.13699824",
                  "type": "TreeModel"
                }], "id": "-0.15711085", "nodeName": "-0.15711085", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "app_score_v2_a_bad_abs_top_avg lessThan -0.0655",
                  "id": "-0.1705564",
                  "nodeName": "-0.1705564",
                  "type": "TreeModel"
                }], "id": "-0.1739912", "nodeName": "-0.1739912", "type": "TreeModel"
              }], "id": "-0.16712159", "nodeName": "-0.16712159", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "order_all_order_hour_seg_eq_late_night_size_ratio_360d lessThan 0.095750004",
                  "id": "-0.17799276",
                  "nodeName": "-0.17799276",
                  "type": "TreeModel"
                }], "id": "-0.17599198", "nodeName": "-0.17599198", "type": "TreeModel"
              }], "id": "-0.1739912", "nodeName": "-0.1739912", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "order_all_order_hour_seg_eq_late_night_size_ratio_360d lessThan 0.08825",
                "id": "-0.1838881",
                "nodeName": "-0.1838881",
                "type": "TreeModel"
              }], "id": "-0.18035638", "nodeName": "-0.18035638", "type": "TreeModel"
            }, {
              "expression": "add_robust_score_a greaterOrEqual 2.6412501",
              "id": "-0.18035638",
              "nodeName": "-0.18035638",
              "type": "TreeModel"
            }], "id": "-0.17799276", "nodeName": "-0.17799276", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "r_credit_succ_after_query_cnt_o_credit_query_cnt_2y lessThan 0.9736842",
                    "id": "-0.15201035",
                    "nodeName": "-0.15201035",
                    "type": "TreeModel"
                  }], "id": "-0.15611997", "nodeName": "-0.15611997", "type": "TreeModel"
                }, {
                  "expression": "app_score_v2_a_bad_abs_top_avg lessThan 0.0045",
                  "id": "-0.15611997",
                  "nodeName": "-0.15611997",
                  "type": "TreeModel"
                }], "id": "-0.16022958", "nodeName": "-0.16022958", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "qry_times_self_l1st lessThan 0.5",
                  "id": "-0.14139299",
                  "nodeName": "-0.14139299",
                  "type": "TreeModel"
                }], "id": "-0.1111256", "nodeName": "-0.1111256", "type": "TreeModel"
              }, {
                "expression": "acc_max_account_reg_days lessThan 593.5",
                "id": "-0.14545661",
                "nodeName": "-0.14545661",
                "type": "TreeModel"
              }], "id": "-0.15201035", "nodeName": "-0.15201035", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "v_all_query_cnt_2y greaterOrEqual 8.5",
                  "id": "-0.16926448",
                  "nodeName": "-0.16926448",
                  "type": "TreeModel"
                }], "id": "-0.1732708", "nodeName": "-0.1732708", "type": "TreeModel"
              }, {
                "expression": "r_credit_succ_after_query_cnt_o_credit_query_cnt_2y lessThan 0.9428104",
                "id": "-0.16688311",
                "nodeName": "-0.16688311",
                "type": "TreeModel"
              }], "id": "-0.16926448", "nodeName": "-0.16926448", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "cc_usrate_max lessThan 0.915",
                "id": "-0.16355634",
                "nodeName": "-0.16355634",
                "type": "TreeModel"
              }], "id": "-0.16022958", "nodeName": "-0.16022958", "type": "TreeModel"
            }, {
              "expression": "v2_p_user_regday greaterOrEqual 443.5",
              "id": "-0.16688311",
              "nodeName": "-0.16688311",
              "type": "TreeModel"
            }], "id": "-0.16355634", "nodeName": "-0.16355634", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "v2_s_max_user_pay_meishi_succ_amt_360d lessThan 11675.0",
                    "id": "-0.13400203",
                    "nodeName": "-0.13400203",
                    "type": "TreeModel"
                  }], "id": "-0.14285049", "nodeName": "-0.14285049", "type": "TreeModel"
                }, {
                  "expression": "ln_mob_internet_min_v3 lessThan 2.855",
                  "id": "-0.13302657",
                  "nodeName": "-0.13302657",
                  "type": "TreeModel"
                }], "id": "-0.11577306", "nodeName": "-0.11577306", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d greaterOrEqual 0.17705",
                  "id": "-0.14675097",
                  "nodeName": "-0.14675097",
                  "type": "TreeModel"
                }], "id": "-0.15065145", "nodeName": "-0.15065145", "type": "TreeModel"
              }], "id": "-0.14285049", "nodeName": "-0.14285049", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "r_credit_succ_after_query_cnt_o_credit_query_cnt_2y lessThan 0.9428104",
                  "id": "-0.15768264",
                  "nodeName": "-0.15768264",
                  "type": "TreeModel"
                }], "id": "-0.16023302", "nodeName": "-0.16023302", "type": "TreeModel"
              }, {
                "expression": "idcellnbankallm3applyorgnumt greaterOrEqual 1.5",
                "id": "-0.16023302",
                "nodeName": "-0.16023302",
                "type": "TreeModel"
              }], "id": "-0.16429599", "nodeName": "-0.16429599", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "idcellnbankallm3applyorgnumt lessThan 0.5",
                "id": "-0.1540207",
                "nodeName": "-0.1540207",
                "type": "TreeModel"
              }], "id": "-0.15065145", "nodeName": "-0.15065145", "type": "TreeModel"
            }, {
              "expression": "v2_p_user_regweek greaterOrEqual 76.5",
              "id": "-0.15768264",
              "nodeName": "-0.15768264",
              "type": "TreeModel"
            }], "id": "-0.1540207", "nodeName": "-0.1540207", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "add_robust_score_ab lessThan 6.94965",
                    "id": "-0.12792677",
                    "nodeName": "-0.12792677",
                    "type": "TreeModel"
                  }], "id": "-0.13498688", "nodeName": "-0.13498688", "type": "TreeModel"
                }, {
                  "expression": "app_score_v2_a_bad_abs_top_avg lessThan -0.1505",
                  "id": "-0.13498688",
                  "nodeName": "-0.13498688",
                  "type": "TreeModel"
                }], "id": "-0.14061134", "nodeName": "-0.14061134", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d greaterOrEqual 0.0473",
                  "id": "-0.090203926",
                  "nodeName": "-0.090203926",
                  "type": "TreeModel"
                }], "id": "-0.11623403", "nodeName": "-0.11623403", "type": "TreeModel"
              }, {
                "expression": "ln_repay_actual greaterOrEqual 540.5",
                "id": "-0.12792677",
                "nodeName": "-0.12792677",
                "type": "TreeModel"
              }], "id": "-0.11634897", "nodeName": "-0.11634897", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "app_score_v2_a_bad_abs_top_avg lessThan 0.0035",
                  "id": "-0.14458326",
                  "nodeName": "-0.14458326",
                  "type": "TreeModel"
                }], "id": "-0.14855516", "nodeName": "-0.14855516", "type": "TreeModel"
              }, {
                "expression": "order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d greaterOrEqual 0.03765",
                "id": "-0.14061134",
                "nodeName": "-0.14061134",
                "type": "TreeModel"
              }], "id": "-0.14458326", "nodeName": "-0.14458326", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d greaterOrEqual 0.10615",
                "id": "-0.15159045",
                "nodeName": "-0.15159045",
                "type": "TreeModel"
              }], "id": "-0.1561641", "nodeName": "-0.1561641", "type": "TreeModel"
            }, {
              "expression": "add_robust_score_a greaterOrEqual 2.9089499",
              "id": "-0.15159045",
              "nodeName": "-0.15159045",
              "type": "TreeModel"
            }], "id": "-0.14855516", "nodeName": "-0.14855516", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "ln_repay_actual greaterOrEqual 358.0",
                    "id": "-0.09036953",
                    "nodeName": "-0.09036953",
                    "type": "TreeModel"
                  }], "id": "-0.051773377", "nodeName": "-0.051773377", "type": "TreeModel"
                }, {
                  "expression": "v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d greaterOrEqual 0.020305092",
                  "id": "-0.09297986",
                  "nodeName": "-0.09297986",
                  "type": "TreeModel"
                }], "id": "-0.11267845", "nodeName": "-0.11267845", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d greaterOrEqual 0.12865001",
                  "id": "-0.122156724",
                  "nodeName": "-0.122156724",
                  "type": "TreeModel"
                }], "id": "-0.13194951", "nodeName": "-0.13194951", "type": "TreeModel"
              }, {
                "expression": "cc_usrate_max greaterOrEqual 0.865",
                "id": "-0.11267845",
                "nodeName": "-0.11267845",
                "type": "TreeModel"
              }], "id": "-0.122156724", "nodeName": "-0.122156724", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "add_robust_score_a greaterOrEqual 3.1574001",
                  "id": "-0.1455105",
                  "nodeName": "-0.1455105",
                  "type": "TreeModel"
                }], "id": "-0.14223503", "nodeName": "-0.14223503", "type": "TreeModel"
              }, {
                "expression": "acc_max_account_reg_days greaterOrEqual 861.5",
                "id": "-0.15082781",
                "nodeName": "-0.15082781",
                "type": "TreeModel"
              }], "id": "-0.1455105", "nodeName": "-0.1455105", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d greaterOrEqual 0.10615",
                "id": "-0.13661948",
                "nodeName": "-0.13661948",
                "type": "TreeModel"
              }], "id": "-0.14223503", "nodeName": "-0.14223503", "type": "TreeModel"
            }, {
              "expression": "v_credit_query_cnt_2y lessThan 2.5",
              "id": "-0.13661948",
              "nodeName": "-0.13661948",
              "type": "TreeModel"
            }], "id": "-0.13194951", "nodeName": "-0.13194951", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "acc_max_account_active_range_days greaterOrEqual 631.5",
                    "id": "-0.13112038",
                    "nodeName": "-0.13112038",
                    "type": "TreeModel"
                  }], "id": "-0.12434302", "nodeName": "-0.12434302", "type": "TreeModel"
                }, {
                  "expression": "cc_usrate_max greaterOrEqual 0.885",
                  "id": "-0.11778476",
                  "nodeName": "-0.11778476",
                  "type": "TreeModel"
                }], "id": "-0.12434302", "nodeName": "-0.12434302", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "ln_mob_internet_min_v3 lessThan 4.63",
                  "id": "-0.09283237",
                  "nodeName": "-0.09283237",
                  "type": "TreeModel"
                }], "id": "-0.06143878", "nodeName": "-0.06143878", "type": "TreeModel"
              }, {
                "expression": "add_robust_score_ab greaterOrEqual 3.2258",
                "id": "-0.11778476",
                "nodeName": "-0.11778476",
                "type": "TreeModel"
              }], "id": "-0.10115246", "nodeName": "-0.10115246", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "add_robust_score_a_b_c greaterOrEqual 6.4819",
                  "id": "-0.1462604",
                  "nodeName": "-0.1462604",
                  "type": "TreeModel"
                }], "id": "-0.14164308", "nodeName": "-0.14164308", "type": "TreeModel"
              }, {
                "expression": "r_credit_succ_after_query_cnt_o_credit_query_cnt_2y lessThan 0.9393382",
                "id": "-0.13731113",
                "nodeName": "-0.13731113",
                "type": "TreeModel"
              }], "id": "-0.1404751", "nodeName": "-0.1404751", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "add_robust_score_a_b_c greaterOrEqual 3.55355",
                "id": "-0.13731113",
                "nodeName": "-0.13731113",
                "type": "TreeModel"
              }], "id": "-0.13419126", "nodeName": "-0.13419126", "type": "TreeModel"
            }], "id": "-0.13112038", "nodeName": "-0.13112038", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "cc_usrate_100p_cnt greaterOrEqual 0.5",
                    "id": "-0.11449948",
                    "nodeName": "-0.11449948",
                    "type": "TreeModel"
                  }], "id": "-0.122496575", "nodeName": "-0.122496575", "type": "TreeModel"
                }, {
                  "expression": "r_credit_succ_after_query_cnt_o_credit_query_cnt_2y lessThan 0.8208556",
                  "id": "-0.10746308",
                  "nodeName": "-0.10746308",
                  "type": "TreeModel"
                }], "id": "-0.11449948", "nodeName": "-0.11449948", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "idnbankallm3applyorgnumt lessThan 6.5",
                  "id": "-0.10746308",
                  "nodeName": "-0.10746308",
                  "type": "TreeModel"
                }], "id": "-0.09394984", "nodeName": "-0.09394984", "type": "TreeModel"
              }, {
                "expression": "idnbankallm3applyorgnumt lessThan 5.5",
                "id": "-0.09142928",
                "nodeName": "-0.09142928",
                "type": "TreeModel"
              }], "id": "-0.062025324", "nodeName": "-0.062025324", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "order_all_order_hour_seg_eq_late_night_size_ratio_360d greaterOrEqual 0.11625",
                  "id": "-0.12714687",
                  "nodeName": "-0.12714687",
                  "type": "TreeModel"
                }], "id": "-0.13211095", "nodeName": "-0.13211095", "type": "TreeModel"
              }, {
                "expression": "ln_repay_actual greaterOrEqual 3877.5",
                "id": "-0.12714687",
                "nodeName": "-0.12714687",
                "type": "TreeModel"
              }], "id": "-0.122496575", "nodeName": "-0.122496575", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d greaterOrEqual 0.092250004",
                "id": "-0.13595302",
                "nodeName": "-0.13595302",
                "type": "TreeModel"
              }], "id": "-0.14157769", "nodeName": "-0.14157769", "type": "TreeModel"
            }, {
              "expression": "add_robust_score_ab greaterOrEqual 5.2536",
              "id": "-0.13595302",
              "nodeName": "-0.13595302",
              "type": "TreeModel"
            }], "id": "-0.13211095", "nodeName": "-0.13211095", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "add_robust_score_a greaterOrEqual 1.57875",
                    "id": "-0.1198431",
                    "nodeName": "-0.1198431",
                    "type": "TreeModel"
                  }], "id": "-0.11331338", "nodeName": "-0.11331338", "type": "TreeModel"
                }, {
                  "expression": "cc_usrate_max greaterOrEqual 0.895",
                  "id": "-0.10474598",
                  "nodeName": "-0.10474598",
                  "type": "TreeModel"
                }], "id": "-0.11331338", "nodeName": "-0.11331338", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "v2_s_max_user_pay_meishi_succ_amt_360d lessThan 11765.0",
                  "id": "-0.08869377",
                  "nodeName": "-0.08869377",
                  "type": "TreeModel"
                }], "id": "-0.10474598", "nodeName": "-0.10474598", "type": "TreeModel"
              }, {
                "expression": "ln_mob_internet_min_v3 lessThan 13.145",
                "id": "-0.080678955",
                "nodeName": "-0.080678955",
                "type": "TreeModel"
              }], "id": "-0.030455075", "nodeName": "-0.030455075", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "v_credit_query_cnt_2y greaterOrEqual 3.5",
                  "id": "-0.132107",
                  "nodeName": "-0.132107",
                  "type": "TreeModel"
                }], "id": "-0.13838099", "nodeName": "-0.13838099", "type": "TreeModel"
              }, {
                "expression": "v2_p_user_regweek greaterOrEqual 147.5",
                "id": "-0.13193244",
                "nodeName": "-0.13193244",
                "type": "TreeModel"
              }], "id": "-0.12738799", "nodeName": "-0.12738799", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "v_all_query_cnt_2y greaterOrEqual 12.5",
                "id": "-0.12361555",
                "nodeName": "-0.12361555",
                "type": "TreeModel"
              }], "id": "-0.12738799", "nodeName": "-0.12738799", "type": "TreeModel"
            }, {
              "expression": "ln_repay_actual greaterOrEqual 3456.5",
              "id": "-0.12361555",
              "nodeName": "-0.12361555",
              "type": "TreeModel"
            }], "id": "-0.1198431", "nodeName": "-0.1198431", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d greaterOrEqual 0.053079285",
                    "id": "-0.094087064",
                    "nodeName": "-0.094087064",
                    "type": "TreeModel"
                  }], "id": "-0.104106024", "nodeName": "-0.104106024", "type": "TreeModel"
                }, {
                  "expression": "idcellnbankallm3applyorgnumt lessThan 4.5",
                  "id": "-0.09348197",
                  "nodeName": "-0.09348197",
                  "type": "TreeModel"
                }], "id": "-0.07199088", "nodeName": "-0.07199088", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "app_score_v2_a_bad_abs_top_avg lessThan -0.0535",
                  "id": "-0.10958299",
                  "nodeName": "-0.10958299",
                  "type": "TreeModel"
                }], "id": "-0.11505995", "nodeName": "-0.11505995", "type": "TreeModel"
              }, {
                "expression": "app_score_v2_a_bad_abs_top_avg greaterOrEqual 0.13749999",
                "id": "-0.10958299",
                "nodeName": "-0.10958299",
                "type": "TreeModel"
              }], "id": "-0.104106024", "nodeName": "-0.104106024", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "add_robust_score_a_b greaterOrEqual 5.33075",
                  "id": "-0.12814248",
                  "nodeName": "-0.12814248",
                  "type": "TreeModel"
                }], "id": "-0.1237431", "nodeName": "-0.1237431", "type": "TreeModel"
              }, {
                "expression": "v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d lessThan 0.013318552",
                "id": "-0.13514304",
                "nodeName": "-0.13514304",
                "type": "TreeModel"
              }], "id": "-0.12914425", "nodeName": "-0.12914425", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "add_robust_score_a_b_c greaterOrEqual 4.4464",
                "id": "-0.1237431",
                "nodeName": "-0.1237431",
                "type": "TreeModel"
              }], "id": "-0.11940153", "nodeName": "-0.11940153", "type": "TreeModel"
            }, {
              "expression": "v_credit_query_cnt_2y greaterOrEqual 2.5",
              "id": "-0.11505995",
              "nodeName": "-0.11505995",
              "type": "TreeModel"
            }], "id": "-0.11940153", "nodeName": "-0.11940153", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "v2_s_max_user_pay_meishi_succ_amt_360d lessThan 11680.5",
                    "id": "-0.08214621",
                    "nodeName": "-0.08214621",
                    "type": "TreeModel"
                  }], "id": "-0.09694737", "nodeName": "-0.09694737", "type": "TreeModel"
                }, {
                  "expression": "consumerloan_times_avg lessThan 15.5",
                  "id": "-0.07744491",
                  "nodeName": "-0.07744491",
                  "type": "TreeModel"
                }], "id": "-0.04348997", "nodeName": "-0.04348997", "type": "TreeModel"
              }, {
                "expression": "add_robust_score_a_b greaterOrEqual 3.30405",
                "id": "-0.10650504",
                "nodeName": "-0.10650504",
                "type": "TreeModel"
              }, {
                "expression": "acc_avg_account_reg_days greaterOrEqual 600.5",
                "id": "-0.101726204",
                "nodeName": "-0.101726204",
                "type": "TreeModel"
              }], "id": "-0.09694737", "nodeName": "-0.09694737", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "order_all_order_hour_seg_eq_late_night_size_ratio_360d lessThan 0.09235",
                  "id": "-0.12985745",
                  "nodeName": "-0.12985745",
                  "type": "TreeModel"
                }], "id": "-0.12234334", "nodeName": "-0.12234334", "type": "TreeModel"
              }, {
                "expression": "v_credit_query_cnt_2y greaterOrEqual 2.5",
                "id": "-0.11750817",
                "nodeName": "-0.11750817",
                "type": "TreeModel"
              }], "id": "-0.12234334", "nodeName": "-0.12234334", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "add_robust_score_ab greaterOrEqual 6.9352503",
                "id": "-0.11173685",
                "nodeName": "-0.11173685",
                "type": "TreeModel"
              }], "id": "-0.10650504", "nodeName": "-0.10650504", "type": "TreeModel"
            }, {
              "expression": "add_robust_score_a greaterOrEqual 1.7768",
              "id": "-0.11750817",
              "nodeName": "-0.11750817",
              "type": "TreeModel"
            }], "id": "-0.11173685", "nodeName": "-0.11173685", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "creditloan_times_avg lessThan 10.5",
                    "id": "-0.06266493",
                    "nodeName": "-0.06266493",
                    "type": "TreeModel"
                  }], "id": "-0.030223887", "nodeName": "-0.030223887", "type": "TreeModel"
                }, {
                  "expression": "app_score_v2_a_bad_abs_top_avg lessThan -0.3885",
                  "id": "-0.0635077",
                  "nodeName": "-0.0635077",
                  "type": "TreeModel"
                }], "id": "-0.08103284", "nodeName": "-0.08103284", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "acc_max_account_active_range_days greaterOrEqual 631.5",
                  "id": "-0.10498975",
                  "nodeName": "-0.10498975",
                  "type": "TreeModel"
                }], "id": "-0.09588821", "nodeName": "-0.09588821", "type": "TreeModel"
              }, {
                "expression": "cc_usrate_max greaterOrEqual 0.905",
                "id": "-0.08103284",
                "nodeName": "-0.08103284",
                "type": "TreeModel"
              }], "id": "-0.09588821", "nodeName": "-0.09588821", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "add_robust_score_a_b greaterOrEqual 5.33075",
                  "id": "-0.119038835",
                  "nodeName": "-0.119038835",
                  "type": "TreeModel"
                }], "id": "-0.11365697", "nodeName": "-0.11365697", "type": "TreeModel"
              }, {
                "expression": "order_all_order_hour_seg_eq_late_night_size_ratio_360d lessThan 0.08115",
                "id": "-0.12697954",
                "nodeName": "-0.12697954",
                "type": "TreeModel"
              }], "id": "-0.119038835", "nodeName": "-0.119038835", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "add_robust_score_a_b greaterOrEqual 2.79685",
                "id": "-0.11365697",
                "nodeName": "-0.11365697",
                "type": "TreeModel"
              }], "id": "-0.10932336", "nodeName": "-0.10932336", "type": "TreeModel"
            }, {
              "expression": "ln_repay_actual greaterOrEqual 3716.5",
              "id": "-0.10932336",
              "nodeName": "-0.10932336",
              "type": "TreeModel"
            }], "id": "-0.10498975", "nodeName": "-0.10498975", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d greaterOrEqual 0.15935001",
                    "id": "-0.09152295",
                    "nodeName": "-0.09152295",
                    "type": "TreeModel"
                  }], "id": "-0.100766085", "nodeName": "-0.100766085", "type": "TreeModel"
                }, {
                  "expression": "v_credit_query_cnt_2y lessThan 2.5",
                  "id": "-0.09152295",
                  "nodeName": "-0.09152295",
                  "type": "TreeModel"
                }], "id": "-0.08203352", "nodeName": "-0.08203352", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "cc_usrate_max greaterOrEqual 0.985",
                  "id": "-0.06866165",
                  "nodeName": "-0.06866165",
                  "type": "TreeModel"
                }], "id": "-0.08203352", "nodeName": "-0.08203352", "type": "TreeModel"
              }, {
                "expression": "ln_mob_internet_min_v3 lessThan 2.63",
                "id": "-0.06822092",
                "nodeName": "-0.06822092",
                "type": "TreeModel"
              }], "id": "-0.03773462", "nodeName": "-0.03773462", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "add_robust_score_a_b_c greaterOrEqual 6.4396",
                  "id": "-0.115743294",
                  "nodeName": "-0.115743294",
                  "type": "TreeModel"
                }], "id": "-0.10879755", "nodeName": "-0.10879755", "type": "TreeModel"
              }, {
                "expression": "v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d greaterOrEqual 0.027192399",
                "id": "-0.115743294",
                "nodeName": "-0.115743294",
                "type": "TreeModel"
              }], "id": "-0.12415845", "nodeName": "-0.12415845", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "ln_repay_actual greaterOrEqual 6889.5",
                "id": "-0.10478182",
                "nodeName": "-0.10478182",
                "type": "TreeModel"
              }], "id": "-0.100766085", "nodeName": "-0.100766085", "type": "TreeModel"
            }, {
              "expression": "v2_v_user_acc_visit_week_cnt_360d greaterOrEqual 11.5",
              "id": "-0.10879755",
              "nodeName": "-0.10879755",
              "type": "TreeModel"
            }], "id": "-0.10478182", "nodeName": "-0.10478182", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d greaterOrEqual 0.11395",
                    "id": "-0.10204948",
                    "nodeName": "-0.10204948",
                    "type": "TreeModel"
                  }], "id": "-0.107896745", "nodeName": "-0.107896745", "type": "TreeModel"
                }, {
                  "expression": "cc_usrate_avg lessThan 0.45499998",
                  "id": "-0.10204948",
                  "nodeName": "-0.10204948",
                  "type": "TreeModel"
                }], "id": "-0.09620221", "nodeName": "-0.09620221", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d greaterOrEqual 0.0951",
                  "id": "-0.11310074",
                  "nodeName": "-0.11310074",
                  "type": "TreeModel"
                }], "id": "-0.12128941", "nodeName": "-0.12128941", "type": "TreeModel"
              }, {
                "expression": "app_score_v2_a_bad_abs_top_avg greaterOrEqual 0.2665",
                "id": "-0.11310074",
                "nodeName": "-0.11310074",
                "type": "TreeModel"
              }], "id": "-0.107896745", "nodeName": "-0.107896745", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d greaterOrEqual 2.5",
                  "id": "-0.071533404",
                  "nodeName": "-0.071533404",
                  "type": "TreeModel"
                }], "id": "-0.08351548", "nodeName": "-0.08351548", "type": "TreeModel"
              }, {
                "expression": "qry_times_self_l1st lessThan 0.5",
                "id": "-0.06326161",
                "nodeName": "-0.06326161",
                "type": "TreeModel"
              }], "id": "-0.013082711", "nodeName": "-0.013082711", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d greaterOrEqual 0.18055001",
                "id": "-0.089858845",
                "nodeName": "-0.089858845",
                "type": "TreeModel"
              }], "id": "-0.09620221", "nodeName": "-0.09620221", "type": "TreeModel"
            }, {
              "expression": "app_score_v2_a_bad_abs_top_avg greaterOrEqual 0.13749999",
              "id": "-0.089858845",
              "nodeName": "-0.089858845",
              "type": "TreeModel"
            }], "id": "-0.08351548", "nodeName": "-0.08351548", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "cc_usrate_max greaterOrEqual 0.995",
                    "id": "0.027345812",
                    "nodeName": "0.027345812",
                    "type": "TreeModel"
                  }], "id": "-0.02790948", "nodeName": "-0.02790948", "type": "TreeModel"
                }, {
                  "expression": "creditloan_times_avg lessThan 10.5",
                  "id": "-0.05850753",
                  "nodeName": "-0.05850753",
                  "type": "TreeModel"
                }], "id": "-0.031239515", "nodeName": "-0.031239515", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "acc_max_account_reg_days greaterOrEqual 861.5",
                  "id": "-0.08732837",
                  "nodeName": "-0.08732837",
                  "type": "TreeModel"
                }], "id": "-0.072443396", "nodeName": "-0.072443396", "type": "TreeModel"
              }, {
                "expression": "v_credit_query_cnt_2y greaterOrEqual 2.5",
                "id": "-0.05850753",
                "nodeName": "-0.05850753",
                "type": "TreeModel"
              }], "id": "-0.072443396", "nodeName": "-0.072443396", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "v_credit_query_cnt_2y greaterOrEqual 3.5",
                  "id": "-0.1049061",
                  "nodeName": "-0.1049061",
                  "type": "TreeModel"
                }], "id": "-0.11663789", "nodeName": "-0.11663789", "type": "TreeModel"
              }, {
                "expression": "r_credit_succ_after_query_cnt_o_credit_query_cnt_2y lessThan 0.9428104",
                "id": "-0.09756363",
                "nodeName": "-0.09756363",
                "type": "TreeModel"
              }], "id": "-0.10451029", "nodeName": "-0.10451029", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "ln_repay_actual greaterOrEqual 3311.5",
                "id": "-0.092446",
                "nodeName": "-0.092446",
                "type": "TreeModel"
              }], "id": "-0.08732837", "nodeName": "-0.08732837", "type": "TreeModel"
            }, {
              "expression": "v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d greaterOrEqual 0.02981899",
              "id": "-0.092446",
              "nodeName": "-0.092446",
              "type": "TreeModel"
            }], "id": "-0.09756363", "nodeName": "-0.09756363", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "cc_usrate_max greaterOrEqual 0.865",
                    "id": "-0.07124619",
                    "nodeName": "-0.07124619",
                    "type": "TreeModel"
                  }], "id": "-0.079116076", "nodeName": "-0.079116076", "type": "TreeModel"
                }, {
                  "expression": "idcellnbankallm3applyorgnumt lessThan 6.5",
                  "id": "-0.08698596",
                  "nodeName": "-0.08698596",
                  "type": "TreeModel"
                }], "id": "-0.079116076", "nodeName": "-0.079116076", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "ln_mob_internet_min_v3 lessThan 3.335",
                  "id": "-0.056456096",
                  "nodeName": "-0.056456096",
                  "type": "TreeModel"
                }], "id": "-0.026582425", "nodeName": "-0.026582425", "type": "TreeModel"
              }, {
                "expression": "acc_max_account_reg_days lessThan 596.5",
                "id": "-0.05828396",
                "nodeName": "-0.05828396",
                "type": "TreeModel"
              }], "id": "-0.07124619", "nodeName": "-0.07124619", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "v2_p_user_regday greaterOrEqual 1270.5",
                  "id": "-0.10761044",
                  "nodeName": "-0.10761044",
                  "type": "TreeModel"
                }], "id": "-0.100508034", "nodeName": "-0.100508034", "type": "TreeModel"
              }, {
                "expression": "cc_usrate_max greaterOrEqual 0.975",
                "id": "-0.10795325",
                "nodeName": "-0.10795325",
                "type": "TreeModel"
              }], "id": "-0.1176522", "nodeName": "-0.1176522", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "v2_p_user_regday greaterOrEqual 519.5",
                "id": "-0.100508034",
                "nodeName": "-0.100508034",
                "type": "TreeModel"
              }], "id": "-0.093747", "nodeName": "-0.093747", "type": "TreeModel"
            }, {
              "expression": "r_credit_succ_after_query_cnt_o_credit_query_cnt_2y lessThan 0.9393382",
              "id": "-0.08698596",
              "nodeName": "-0.08698596",
              "type": "TreeModel"
            }], "id": "-0.093747", "nodeName": "-0.093747", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "add_robust_score_a_b_c greaterOrEqual 7.1944",
                    "id": "-0.103420675",
                    "nodeName": "-0.103420675",
                    "type": "TreeModel"
                  }], "id": "-0.09660037", "nodeName": "-0.09660037", "type": "TreeModel"
                }, {
                  "expression": "v_credit_query_cnt_2y greaterOrEqual 4.5",
                  "id": "-0.103420675",
                  "nodeName": "-0.103420675",
                  "type": "TreeModel"
                }], "id": "-0.114076085", "nodeName": "-0.114076085", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "ln_mob_internet_min_v3 lessThan 2.755",
                  "id": "-0.09194453",
                  "nodeName": "-0.09194453",
                  "type": "TreeModel"
                }], "id": "-0.08728869", "nodeName": "-0.08728869", "type": "TreeModel"
              }, {
                "expression": "v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d greaterOrEqual 0.019691214",
                "id": "-0.09194453",
                "nodeName": "-0.09194453",
                "type": "TreeModel"
              }], "id": "-0.09660037", "nodeName": "-0.09660037", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "app_score_v2_a_bad_abs_top_avg lessThan -0.3105",
                  "id": "-0.038554773",
                  "nodeName": "-0.038554773",
                  "type": "TreeModel"
                }], "id": "-0.059513494", "nodeName": "-0.059513494", "type": "TreeModel"
              }, {
                "expression": "qry_times_self_l1st greaterOrEqual 0.5",
                "id": "0.036047082",
                "nodeName": "0.036047082",
                "type": "TreeModel"
              }], "id": "-0.027206957", "nodeName": "-0.027206957", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "v_credit_query_cnt_2y greaterOrEqual 2.5",
                "id": "-0.059513494",
                "nodeName": "-0.059513494",
                "type": "TreeModel"
              }], "id": "-0.07250081", "nodeName": "-0.07250081", "type": "TreeModel"
            }, {
              "expression": "acc_max_account_active_range_days greaterOrEqual 621.5",
              "id": "-0.08728869",
              "nodeName": "-0.08728869",
              "type": "TreeModel"
            }], "id": "-0.07250081", "nodeName": "-0.07250081", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d greaterOrEqual 0.10386062",
                    "id": "-0.039821986",
                    "nodeName": "-0.039821986",
                    "type": "TreeModel"
                  }], "id": "-0.057214703", "nodeName": "-0.057214703", "type": "TreeModel"
                }, {
                  "expression": "add_robust_score_a greaterOrEqual 2.81255",
                  "id": "-0.039821986",
                  "nodeName": "-0.039821986",
                  "type": "TreeModel"
                }], "id": "-0.010130762", "nodeName": "-0.010130762", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d greaterOrEqual 0.07762805",
                  "id": "-0.06543468",
                  "nodeName": "-0.06543468",
                  "type": "TreeModel"
                }], "id": "-0.07365466", "nodeName": "-0.07365466", "type": "TreeModel"
              }, {
                "expression": "v2_s_max_user_pay_meishi_succ_amt_360d lessThan 19670.0",
                "id": "-0.057214703",
                "nodeName": "-0.057214703",
                "type": "TreeModel"
              }], "id": "-0.06543468", "nodeName": "-0.06543468", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d greaterOrEqual 3.5",
                  "id": "-0.081466444",
                  "nodeName": "-0.081466444",
                  "type": "TreeModel"
                }], "id": "-0.08927823", "nodeName": "-0.08927823", "type": "TreeModel"
              }, {
                "expression": "cc_usrate_avg lessThan 0.435",
                "id": "-0.081466444",
                "nodeName": "-0.081466444",
                "type": "TreeModel"
              }], "id": "-0.07365466", "nodeName": "-0.07365466", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d greaterOrEqual 0.01479657",
                "id": "-0.09733438",
                "nodeName": "-0.09733438",
                "type": "TreeModel"
              }], "id": "-0.1112325", "nodeName": "-0.1112325", "type": "TreeModel"
            }, {
              "expression": "v2_p_user_regday greaterOrEqual 1160.5",
              "id": "-0.09733438",
              "nodeName": "-0.09733438",
              "type": "TreeModel"
            }], "id": "-0.08927823", "nodeName": "-0.08927823", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "idcellnbankallm3applyorgnumt lessThan 4.5",
                    "id": "-0.06388113",
                    "nodeName": "-0.06388113",
                    "type": "TreeModel"
                  }], "id": "-0.050500482", "nodeName": "-0.050500482", "type": "TreeModel"
                }, {
                  "expression": "v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d greaterOrEqual 0.050987914",
                  "id": "-0.008886633",
                  "nodeName": "-0.008886633",
                  "type": "TreeModel"
                }], "id": "-0.04644043", "nodeName": "-0.04644043", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d greaterOrEqual 0.07993056",
                  "id": "-0.071125865",
                  "nodeName": "-0.071125865",
                  "type": "TreeModel"
                }], "id": "-0.07837059", "nodeName": "-0.07837059", "type": "TreeModel"
              }, {
                "expression": "app_score_v2_a_bad_abs_top_avg greaterOrEqual 0.1415",
                "id": "-0.071125865",
                "nodeName": "-0.071125865",
                "type": "TreeModel"
              }], "id": "-0.06388113", "nodeName": "-0.06388113", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "unsquare_consume_times_avg greaterOrEqual 7.5",
                  "id": "-0.098852366",
                  "nodeName": "-0.098852366",
                  "type": "TreeModel"
                }], "id": "-0.10979529", "nodeName": "-0.10979529", "type": "TreeModel"
              }, {
                "expression": "v2_p_user_regday greaterOrEqual 1060.5",
                "id": "-0.098852366",
                "nodeName": "-0.098852366",
                "type": "TreeModel"
              }], "id": "-0.08888872", "nodeName": "-0.08888872", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "v_credit_query_cnt_2y greaterOrEqual 6.5",
                "id": "-0.08362965",
                "nodeName": "-0.08362965",
                "type": "TreeModel"
              }], "id": "-0.08888872", "nodeName": "-0.08888872", "type": "TreeModel"
            }, {
              "expression": "ln_limit_normal_sum greaterOrEqual 282150.0",
              "id": "-0.08362965",
              "nodeName": "-0.08362965",
              "type": "TreeModel"
            }], "id": "-0.07837059", "nodeName": "-0.07837059", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "order_all_order_hour_seg_eq_late_night_size_ratio_360d lessThan 0.04935",
                    "id": "-0.048374884",
                    "nodeName": "-0.048374884",
                    "type": "TreeModel"
                  }], "id": "-0.037143532", "nodeName": "-0.037143532", "type": "TreeModel"
                }, {
                  "expression": "cc_usrate_max greaterOrEqual 1.015",
                  "id": "-0.048374884",
                  "nodeName": "-0.048374884",
                  "type": "TreeModel"
                }], "id": "-0.058971703", "nodeName": "-0.058971703", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d greaterOrEqual 0.012121657",
                  "id": "-0.011015046",
                  "nodeName": "-0.011015046",
                  "type": "TreeModel"
                }], "id": "-0.037143532", "nodeName": "-0.037143532", "type": "TreeModel"
              }, {
                "expression": "v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d greaterOrEqual 0.04986188",
                "id": "0.0517791",
                "nodeName": "0.0517791",
                "type": "TreeModel"
              }], "id": "-0.004115423", "nodeName": "-0.004115423", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "app_score_v2_a_bad_abs_top_avg lessThan -0.0385",
                  "id": "-0.06778667",
                  "nodeName": "-0.06778667",
                  "type": "TreeModel"
                }], "id": "-0.07660164", "nodeName": "-0.07660164", "type": "TreeModel"
              }, {
                "expression": "cc_usrate_max lessThan 0.875",
                "id": "-0.06778667",
                "nodeName": "-0.06778667",
                "type": "TreeModel"
              }], "id": "-0.058971703", "nodeName": "-0.058971703", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d greaterOrEqual 0.08425",
                "id": "-0.08621974",
                "nodeName": "-0.08621974",
                "type": "TreeModel"
              }], "id": "-0.1023656", "nodeName": "-0.1023656", "type": "TreeModel"
            }, {
              "expression": "app_score_v2_cc_limit_avg_head3_plus_tail3 greaterOrEqual 0.73950005",
              "id": "-0.08621974",
              "nodeName": "-0.08621974",
              "type": "TreeModel"
            }], "id": "-0.07660164", "nodeName": "-0.07660164", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "r_credit_succ_after_query_cnt_o_credit_query_cnt_2y lessThan 0.9393382",
                    "id": "-0.08079459",
                    "nodeName": "-0.08079459",
                    "type": "TreeModel"
                  }], "id": "-0.08957876", "nodeName": "-0.08957876", "type": "TreeModel"
                }, {
                  "expression": "v_all_query_cnt_2y greaterOrEqual 9.5",
                  "id": "-0.08957876",
                  "nodeName": "-0.08957876",
                  "type": "TreeModel"
                }], "id": "-0.10350291", "nodeName": "-0.10350291", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "add_robust_score_a_b greaterOrEqual 3.51105",
                  "id": "-0.08079459",
                  "nodeName": "-0.08079459",
                  "type": "TreeModel"
                }], "id": "-0.07526392", "nodeName": "-0.07526392", "type": "TreeModel"
              }, {
                "expression": "ln_ever_amt_max greaterOrEqual 240500.0",
                "id": "-0.07526392",
                "nodeName": "-0.07526392",
                "type": "TreeModel"
              }], "id": "-0.069733255", "nodeName": "-0.069733255", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "v_credit_query_cnt_2y greaterOrEqual 2.5",
                  "id": "-0.052218817",
                  "nodeName": "-0.052218817",
                  "type": "TreeModel"
                }], "id": "-0.060976036", "nodeName": "-0.060976036", "type": "TreeModel"
              }, {
                "expression": "app_score_v2_a_bad_abs_top_avg lessThan 0.024500001",
                "id": "-0.060976036",
                "nodeName": "-0.060976036",
                "type": "TreeModel"
              }], "id": "-0.069733255", "nodeName": "-0.069733255", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "creditloan_times_avg lessThan 13.5",
                "id": "-0.052218817",
                "nodeName": "-0.052218817",
                "type": "TreeModel"
              }], "id": "-0.036988515", "nodeName": "-0.036988515", "type": "TreeModel"
            }, {
              "expression": "ln_mob_internet_min_v3 lessThan 3.045",
              "id": "-0.036988515",
              "nodeName": "-0.036988515",
              "type": "TreeModel"
            }], "id": "-0.0038207676", "nodeName": "-0.0038207676", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "v_all_query_cnt_2y greaterOrEqual 15.5",
                    "id": "0.017353304",
                    "nodeName": "0.017353304",
                    "type": "TreeModel"
                  }], "id": "-0.020024404", "nodeName": "-0.020024404", "type": "TreeModel"
                }, {
                  "expression": "add_robust_score_a greaterOrEqual 2.0482502",
                  "id": "0.019099928",
                  "nodeName": "0.019099928",
                  "type": "TreeModel"
                }], "id": "0.07779307", "nodeName": "0.07779307", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "add_robust_score_ab greaterOrEqual 2.50555",
                  "id": "-0.060465224",
                  "nodeName": "-0.060465224",
                  "type": "TreeModel"
                }], "id": "-0.047813285", "nodeName": "-0.047813285", "type": "TreeModel"
              }, {
                "expression": "v2_p_user_regday greaterOrEqual 1078.5",
                "id": "-0.047813285",
                "nodeName": "-0.047813285",
                "type": "TreeModel"
              }], "id": "-0.021635614", "nodeName": "-0.021635614", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "v_all_query_cnt_2y greaterOrEqual 6.5",
                  "id": "-0.08493098",
                  "nodeName": "-0.08493098",
                  "type": "TreeModel"
                }], "id": "-0.101226114", "nodeName": "-0.101226114", "type": "TreeModel"
              }, {
                "expression": "r_credit_succ_after_query_cnt_o_credit_query_cnt_2y lessThan 0.9428104",
                "id": "-0.07324539",
                "nodeName": "-0.07324539",
                "type": "TreeModel"
              }], "id": "-0.08309622", "nodeName": "-0.08309622", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "ln_repay_actual greaterOrEqual 3970.5",
                "id": "-0.06685531",
                "nodeName": "-0.06685531",
                "type": "TreeModel"
              }], "id": "-0.060465224", "nodeName": "-0.060465224", "type": "TreeModel"
            }, {
              "expression": "app_score_v2_cc_limit_avg_head3_plus_tail3 lessThan 0.3265",
              "id": "-0.06685531",
              "nodeName": "-0.06685531",
              "type": "TreeModel"
            }], "id": "-0.07324539", "nodeName": "-0.07324539", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "cc_usrate_100p_cnt greaterOrEqual 0.5",
                    "id": "0.048207205",
                    "nodeName": "0.048207205",
                    "type": "TreeModel"
                  }], "id": "-0.001163444", "nodeName": "-0.001163444", "type": "TreeModel"
                }, {
                  "expression": "app_score_v2_a_bad_abs_top_avg lessThan -0.3105",
                  "id": "-0.0051792376",
                  "nodeName": "-0.0051792376",
                  "type": "TreeModel"
                }], "id": "-0.02554553", "nodeName": "-0.02554553", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "ln_limit_normal_sum greaterOrEqual 259070.5",
                  "id": "-0.040291637",
                  "nodeName": "-0.040291637",
                  "type": "TreeModel"
                }], "id": "-0.02554553", "nodeName": "-0.02554553", "type": "TreeModel"
              }, {
                "expression": "consumerloan_times_avg lessThan 14.5",
                "id": "-0.056056947",
                "nodeName": "-0.056056947",
                "type": "TreeModel"
              }], "id": "-0.040291637", "nodeName": "-0.040291637", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "sp_s_sum_user_sp_alipay_pay_succ_amt_6m greaterOrEqual 44.55",
                  "id": "-0.07947612",
                  "nodeName": "-0.07947612",
                  "type": "TreeModel"
                }], "id": "-0.06894711", "nodeName": "-0.06894711", "type": "TreeModel"
              }, {
                "expression": "app_score_v2_a_bad_abs_top_avg lessThan 0.1325",
                "id": "-0.07947612",
                "nodeName": "-0.07947612",
                "type": "TreeModel"
              }], "id": "-0.09447075", "nodeName": "-0.09447075", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "idnbankallm3applyorgnumt lessThan 3.5",
                "id": "-0.06894711",
                "nodeName": "-0.06894711",
                "type": "TreeModel"
              }], "id": "-0.06250203", "nodeName": "-0.06250203", "type": "TreeModel"
            }, {
              "expression": "app_score_v2_a_bad_abs_top_avg greaterOrEqual 0.15349999",
              "id": "-0.06250203",
              "nodeName": "-0.06250203",
              "type": "TreeModel"
            }], "id": "-0.056056947", "nodeName": "-0.056056947", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "add_robust_score_a_b greaterOrEqual 5.3619",
                    "id": "-0.08034589",
                    "nodeName": "-0.08034589",
                    "type": "TreeModel"
                  }], "id": "-0.069986925", "nodeName": "-0.069986925", "type": "TreeModel"
                }, {
                  "expression": "v_all_query_cnt_2y greaterOrEqual 9.5",
                  "id": "-0.08034589",
                  "nodeName": "-0.08034589",
                  "type": "TreeModel"
                }], "id": "-0.09624648", "nodeName": "-0.09624648", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "v2_v_user_acc_visit_week_cnt_360d greaterOrEqual 22.5",
                  "id": "-0.069986925",
                  "nodeName": "-0.069986925",
                  "type": "TreeModel"
                }], "id": "-0.063608274", "nodeName": "-0.063608274", "type": "TreeModel"
              }, {
                "expression": "ln_repay_actual greaterOrEqual 3744.5",
                "id": "-0.063608274",
                "nodeName": "-0.063608274",
                "type": "TreeModel"
              }], "id": "-0.05722963", "nodeName": "-0.05722963", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "v2_p_user_regweek lessThan 110.5",
                  "id": "-0.020834351",
                  "nodeName": "-0.020834351",
                  "type": "TreeModel"
                }], "id": "-0.04043028", "nodeName": "-0.04043028", "type": "TreeModel"
              }, {
                "expression": "v2_s_max_user_pay_meishi_succ_amt_360d lessThan 16705.0",
                "id": "0.013056048",
                "nodeName": "0.013056048",
                "type": "TreeModel"
              }], "id": "-0.020834351", "nodeName": "-0.020834351", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d greaterOrEqual 0.06863867",
                "id": "-0.048829958",
                "nodeName": "-0.048829958",
                "type": "TreeModel"
              }], "id": "-0.05722963", "nodeName": "-0.05722963", "type": "TreeModel"
            }, {
              "expression": "ln_repay_actual greaterOrEqual 2977.5",
              "id": "-0.048829958",
              "nodeName": "-0.048829958",
              "type": "TreeModel"
            }], "id": "-0.04043028", "nodeName": "-0.04043028", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d greaterOrEqual 0.09751695",
                    "id": "-0.039421517",
                    "nodeName": "-0.039421517",
                    "type": "TreeModel"
                  }], "id": "-0.0497", "nodeName": "-0.0497", "type": "TreeModel"
                }, {
                  "expression": "ln_repay_actual greaterOrEqual 2704.5",
                  "id": "-0.039421517",
                  "nodeName": "-0.039421517",
                  "type": "TreeModel"
                }], "id": "-0.029143035", "nodeName": "-0.029143035", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d greaterOrEqual 0.046649396",
                  "id": "-0.012279909",
                  "nodeName": "-0.012279909",
                  "type": "TreeModel"
                }], "id": "-0.029143035", "nodeName": "-0.029143035", "type": "TreeModel"
              }, {
                "expression": "ln_ever_amt_max greaterOrEqual 99270.0",
                "id": "-0.012279909",
                "nodeName": "-0.012279909",
                "type": "TreeModel"
              }], "id": "0.017770298", "nodeName": "0.017770298", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "v2_p_user_regday greaterOrEqual 1269.5",
                  "id": "-0.073512666",
                  "nodeName": "-0.073512666",
                  "type": "TreeModel"
                }], "id": "-0.062345095", "nodeName": "-0.062345095", "type": "TreeModel"
              }, {
                "expression": "idcellnbankallm3applyorgnumt lessThan 1.5",
                "id": "-0.0941917",
                "nodeName": "-0.0941917",
                "type": "TreeModel"
              }], "id": "-0.073512666", "nodeName": "-0.073512666", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "app_score_v2_cc_limit_avg_head3_plus_tail3 lessThan 0.1175",
                "id": "-0.056022547",
                "nodeName": "-0.056022547",
                "type": "TreeModel"
              }], "id": "-0.062345095", "nodeName": "-0.062345095", "type": "TreeModel"
            }, {
              "expression": "v2_s_max_user_pay_meishi_succ_amt_360d greaterOrEqual 15102.5",
              "id": "-0.056022547",
              "nodeName": "-0.056022547",
              "type": "TreeModel"
            }], "id": "-0.0497", "nodeName": "-0.0497", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "expression": "order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d greaterOrEqual 4.5",
                  "id": "0.086643085",
                  "nodeName": "0.086643085",
                  "type": "TreeModel"
                }, {
                  "expression": "add_robust_score_a greaterOrEqual 1.9965999",
                  "id": "-0.0024781292",
                  "nodeName": "-0.0024781292",
                  "type": "TreeModel"
                }], "id": "0.032830365", "nodeName": "0.032830365", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "v2_s_max_user_pay_meishi_succ_amt_360d lessThan 19185.0",
                  "id": "-0.0042526694",
                  "nodeName": "-0.0042526694",
                  "type": "TreeModel"
                }], "id": "-0.015424548", "nodeName": "-0.015424548", "type": "TreeModel"
              }, {
                "expression": "unsquare_consume_balance_max greaterOrEqual 11049.5",
                "id": "-0.015424548",
                "nodeName": "-0.015424548",
                "type": "TreeModel"
              }], "id": "-0.026596425", "nodeName": "-0.026596425", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "order_all_order_hour_seg_eq_late_night_size_ratio_360d greaterOrEqual 0.13475001",
                  "id": "-0.037738558",
                  "nodeName": "-0.037738558",
                  "type": "TreeModel"
                }], "id": "-0.04888069", "nodeName": "-0.04888069", "type": "TreeModel"
              }, {
                "expression": "r_credit_succ_after_query_cnt_o_credit_query_cnt_2y lessThan 0.89181286",
                "id": "-0.026596425",
                "nodeName": "-0.026596425",
                "type": "TreeModel"
              }], "id": "-0.037738558", "nodeName": "-0.037738558", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d greaterOrEqual 0.11585",
                "id": "-0.06369063",
                "nodeName": "-0.06369063",
                "type": "TreeModel"
              }], "id": "-0.084357575", "nodeName": "-0.084357575", "type": "TreeModel"
            }, {
              "expression": "order_all_order_hour_seg_eq_late_night_size_ratio_360d lessThan 0.030250002",
              "id": "-0.06369063",
              "nodeName": "-0.06369063",
              "type": "TreeModel"
            }], "id": "-0.04888069", "nodeName": "-0.04888069", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "cc_usrate_max lessThan 0.905",
                    "id": "-0.037007824",
                    "nodeName": "-0.037007824",
                    "type": "TreeModel"
                  }], "id": "-0.026643315", "nodeName": "-0.026643315", "type": "TreeModel"
                }, {
                  "expression": "order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d greaterOrEqual 3.5",
                  "id": "-0.037007824",
                  "nodeName": "-0.037007824",
                  "type": "TreeModel"
                }], "id": "-0.047372334", "nodeName": "-0.047372334", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "app_score_v2_cc_limit_avg_head3_plus_tail3 lessThan 0.2805",
                  "id": "0.082423404",
                  "nodeName": "0.082423404",
                  "type": "TreeModel"
                }], "id": "0.013786918", "nodeName": "0.013786918", "type": "TreeModel"
              }, {
                "expression": "cc_usrate_avg lessThan 0.895",
                "id": "-0.026643315",
                "nodeName": "-0.026643315",
                "type": "TreeModel"
              }], "id": "0.0015260167", "nodeName": "0.0015260167", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "acc_avg_account_reg_days lessThan 820.5",
                  "id": "-0.060312387",
                  "nodeName": "-0.060312387",
                  "type": "TreeModel"
                }], "id": "-0.0715301", "nodeName": "-0.0715301", "type": "TreeModel"
              }, {
                "expression": "add_robust_score_a_b_c greaterOrEqual 5.66855",
                "id": "-0.09127325",
                "nodeName": "-0.09127325",
                "type": "TreeModel"
              }], "id": "-0.0721048", "nodeName": "-0.0721048", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "order_all_order_hour_seg_eq_late_night_size_ratio_360d greaterOrEqual 0.05625",
                "id": "-0.05384236",
                "nodeName": "-0.05384236",
                "type": "TreeModel"
              }], "id": "-0.060312387", "nodeName": "-0.060312387", "type": "TreeModel"
            }, {
              "expression": "app_score_v2_cc_limit_avg_head3_plus_tail3 greaterOrEqual 0.88049996",
              "id": "-0.05384236",
              "nodeName": "-0.05384236",
              "type": "TreeModel"
            }], "id": "-0.047372334", "nodeName": "-0.047372334", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "add_robust_score_a_b lessThan 6.6241503",
                    "id": "-0.03997594",
                    "nodeName": "-0.03997594",
                    "type": "TreeModel"
                  }], "id": "-0.046932966", "nodeName": "-0.046932966", "type": "TreeModel"
                }, {
                  "expression": "acc_avg_account_reg_days lessThan 688.5",
                  "id": "-0.046932966",
                  "nodeName": "-0.046932966",
                  "type": "TreeModel"
                }], "id": "-0.05388999", "nodeName": "-0.05388999", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "add_robust_score_ab lessThan 7.13065",
                  "id": "-0.07372354",
                  "nodeName": "-0.07372354",
                  "type": "TreeModel"
                }], "id": "-0.09168639", "nodeName": "-0.09168639", "type": "TreeModel"
              }, {
                "expression": "add_robust_score_ab lessThan 8.86865",
                "id": "-0.05388999",
                "nodeName": "-0.05388999",
                "type": "TreeModel"
              }], "id": "-0.06897874", "nodeName": "-0.06897874", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "ln_delq_l12m_lvl1p_times_v2 greaterOrEqual 0.5",
                "id": "0.099393524",
                "nodeName": "0.099393524",
                "type": "TreeModel"
              }, {
                "expression": "v2_p_user_regweek greaterOrEqual 83.5",
                "id": "-0.012681895",
                "nodeName": "-0.012681895",
                "type": "TreeModel"
              }], "id": "0.02868037", "nodeName": "0.02868037", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "cc_mob_max_now lessThan 69.854996",
                "id": "-0.01658503",
                "nodeName": "-0.01658503",
                "type": "TreeModel"
              }], "id": "-0.028280485", "nodeName": "-0.028280485", "type": "TreeModel"
            }, {
              "expression": "acc_max_account_reg_days greaterOrEqual 596.5",
              "id": "-0.03997594",
              "nodeName": "-0.03997594",
              "type": "TreeModel"
            }], "id": "-0.028280485", "nodeName": "-0.028280485", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d greaterOrEqual 4.5",
                    "id": "-0.004887905",
                    "nodeName": "-0.004887905",
                    "type": "TreeModel"
                  }], "id": "-0.022668943", "nodeName": "-0.022668943", "type": "TreeModel"
                }, {
                  "expression": "cc_usrate_max greaterOrEqual 0.865",
                  "id": "0.012893133",
                  "nodeName": "0.012893133",
                  "type": "TreeModel"
                }], "id": "-0.004887905", "nodeName": "-0.004887905", "type": "TreeModel"
              }, {
                "expression": "v2_r_user_paycftsuccamt_o_payamt_180d greaterOrEqual 0.7163642",
                "id": "0.100224614",
                "nodeName": "0.100224614",
                "type": "TreeModel"
              }, {
                "expression": "v2_v_user_acc_visit_week_cnt_360d greaterOrEqual 27.5",
                "id": "0.012893133",
                "nodeName": "0.012893133",
                "type": "TreeModel"
              }], "id": "0.05245442", "nodeName": "0.05245442", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "cc_usrate_max greaterOrEqual 0.96500003",
                  "id": "-0.05564266",
                  "nodeName": "-0.05564266",
                  "type": "TreeModel"
                }], "id": "-0.07881478", "nodeName": "-0.07881478", "type": "TreeModel"
              }, {
                "expression": "cc_usrate_max lessThan 0.835",
                "id": "-0.05564266",
                "nodeName": "-0.05564266",
                "type": "TreeModel"
              }], "id": "-0.04114654", "nodeName": "-0.04114654", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "cc_usrate_max greaterOrEqual 0.945",
                "id": "-0.03190774",
                "nodeName": "-0.03190774",
                "type": "TreeModel"
              }], "id": "-0.04114654", "nodeName": "-0.04114654", "type": "TreeModel"
            }, {
              "expression": "ln_repay_actual greaterOrEqual 3623.5",
              "id": "-0.03190774",
              "nodeName": "-0.03190774",
              "type": "TreeModel"
            }], "id": "-0.022668943", "nodeName": "-0.022668943", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "v2_r_user_paycftsuccamt_o_payamt_360d greaterOrEqual 0.5477363",
                    "id": "0.0973174",
                    "nodeName": "0.0973174",
                    "type": "TreeModel"
                  }], "id": "0.042907175", "nodeName": "0.042907175", "type": "TreeModel"
                }, {
                  "expression": "add_robust_score_a greaterOrEqual 1.6326001",
                  "id": "0.0069520148",
                  "nodeName": "0.0069520148",
                  "type": "TreeModel"
                }], "id": "0.03290422", "nodeName": "0.03290422", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "v_all_query_cnt_2y lessThan 11.5",
                  "id": "-0.0035143127",
                  "nodeName": "-0.0035143127",
                  "type": "TreeModel"
                }], "id": "0.0069520148", "nodeName": "0.0069520148", "type": "TreeModel"
              }, {
                "expression": "ln_ever_amt_max greaterOrEqual 2278.0",
                "id": "-0.01398064",
                "nodeName": "-0.01398064",
                "type": "TreeModel"
              }], "id": "-0.0035143127", "nodeName": "-0.0035143127", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "idcellnbankallm3applyorgnumt lessThan 4.5",
                  "id": "-0.041017435",
                  "nodeName": "-0.041017435",
                  "type": "TreeModel"
                }], "id": "-0.027499039", "nodeName": "-0.027499039", "type": "TreeModel"
              }, {
                "expression": "v2_s_max_user_pay_meishi_succ_amt_360d greaterOrEqual 18797.5",
                "id": "-0.027499039",
                "nodeName": "-0.027499039",
                "type": "TreeModel"
              }], "id": "-0.01398064", "nodeName": "-0.01398064", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "add_robust_score_a_b_c greaterOrEqual 7.3603",
                "id": "-0.05311238",
                "nodeName": "-0.05311238",
                "type": "TreeModel"
              }], "id": "-0.041017435", "nodeName": "-0.041017435", "type": "TreeModel"
            }, {
              "expression": "v2_s_max_user_pay_meishi_succ_amt_360d greaterOrEqual 10031.0",
              "id": "-0.077081636",
              "nodeName": "-0.077081636",
              "type": "TreeModel"
            }], "id": "-0.05311238", "nodeName": "-0.05311238", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "ln_repay_actual lessThan 3811.5",
                    "id": "-0.008643222",
                    "nodeName": "-0.008643222",
                    "type": "TreeModel"
                  }], "id": "-0.017582811", "nodeName": "-0.017582811", "type": "TreeModel"
                }, {
                  "expression": "idcellnbankp2pm3applyorgnumt greaterOrEqual 1.5",
                  "id": "-0.017582811",
                  "nodeName": "-0.017582811",
                  "type": "TreeModel"
                }], "id": "-0.0265224", "nodeName": "-0.0265224", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d greaterOrEqual 0.0920649",
                  "id": "0.013205279",
                  "nodeName": "0.013205279",
                  "type": "TreeModel"
                }], "id": "-0.008643222", "nodeName": "-0.008643222", "type": "TreeModel"
              }, {
                "expression": "cc_usrate_100p_cnt lessThan 1.5",
                "id": "0.024718598",
                "nodeName": "0.024718598",
                "type": "TreeModel"
              }], "id": "0.0827591", "nodeName": "0.0827591", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "v2_p_user_regweek greaterOrEqual 194.5",
                  "id": "-0.05355764",
                  "nodeName": "-0.05355764",
                  "type": "TreeModel"
                }], "id": "-0.040907767", "nodeName": "-0.040907767", "type": "TreeModel"
              }, {
                "expression": "idcellnbankalld7applyorgnumt greaterOrEqual 0.5",
                "id": "-0.05355764",
                "nodeName": "-0.05355764",
                "type": "TreeModel"
              }], "id": "-0.074485965", "nodeName": "-0.074485965", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "app_score_v2_cc_limit_avg_head3_plus_tail3 greaterOrEqual 0.96650004",
                "id": "-0.033715084",
                "nodeName": "-0.033715084",
                "type": "TreeModel"
              }], "id": "-0.0265224", "nodeName": "-0.0265224", "type": "TreeModel"
            }, {
              "expression": "order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d greaterOrEqual 2.5",
              "id": "-0.033715084",
              "nodeName": "-0.033715084",
              "type": "TreeModel"
            }], "id": "-0.040907767", "nodeName": "-0.040907767", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "ln_limit_normal_sum greaterOrEqual 422650.0",
                    "id": "-0.036436163",
                    "nodeName": "-0.036436163",
                    "type": "TreeModel"
                  }], "id": "-0.029053573", "nodeName": "-0.029053573", "type": "TreeModel"
                }, {
                  "expression": "acc_avg_account_reg_days lessThan 696.5",
                  "id": "-0.036436163",
                  "nodeName": "-0.036436163",
                  "type": "TreeModel"
                }], "id": "-0.043818753", "nodeName": "-0.043818753", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "cc_usrate_max lessThan 0.96500003",
                  "id": "-0.06006258",
                  "nodeName": "-0.06006258",
                  "type": "TreeModel"
                }], "id": "-0.043818753", "nodeName": "-0.043818753", "type": "TreeModel"
              }, {
                "expression": "add_robust_score_a_b lessThan 5.66855",
                "id": "-0.062149704",
                "nodeName": "-0.062149704",
                "type": "TreeModel"
              }], "id": "-0.08157252", "nodeName": "-0.08157252", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "acc_avg_account_reg_days greaterOrEqual 801.5",
                  "id": "0.019646637",
                  "nodeName": "0.019646637",
                  "type": "TreeModel"
                }], "id": "0.05652281", "nodeName": "0.05652281", "type": "TreeModel"
              }, {
                "expression": "v2_s_max_user_pay_meishi_succ_amt_360d lessThan 12356.0",
                "id": "0.019646637",
                "nodeName": "0.019646637",
                "type": "TreeModel"
              }], "id": "-0.0022521308", "nodeName": "-0.0022521308", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "creditloan_times_avg lessThan 9.5",
                "id": "-0.015652852",
                "nodeName": "-0.015652852",
                "type": "TreeModel"
              }], "id": "-0.0022521308", "nodeName": "-0.0022521308", "type": "TreeModel"
            }, {
              "expression": "v2_p_user_regday lessThan 452.5",
              "id": "-0.015652852",
              "nodeName": "-0.015652852",
              "type": "TreeModel"
            }], "id": "-0.029053573", "nodeName": "-0.029053573", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "order_all_order_hour_seg_eq_late_night_size_ratio_360d greaterOrEqual 0.12615001",
                    "id": "-0.01730492",
                    "nodeName": "-0.01730492",
                    "type": "TreeModel"
                  }], "id": "-0.032077905", "nodeName": "-0.032077905", "type": "TreeModel"
                }, {
                  "expression": "consumerloan_times_avg lessThan 9.5",
                  "id": "-0.01730492",
                  "nodeName": "-0.01730492",
                  "type": "TreeModel"
                }], "id": "0.014069202", "nodeName": "0.014069202", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "acc_max_account_reg_days lessThan 870.5",
                  "id": "0.055354297",
                  "nodeName": "0.055354297",
                  "type": "TreeModel"
                }], "id": "0.017574165", "nodeName": "0.017574165", "type": "TreeModel"
              }, {
                "expression": "v2_s_max_user_pay_meishi_succ_amt_360d greaterOrEqual 6060.0",
                "id": "0.063141584",
                "nodeName": "0.063141584",
                "type": "TreeModel"
              }], "id": "0.12404684", "nodeName": "0.12404684", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "acc_avg_account_reg_days lessThan 809.5",
                  "id": "-0.04693655",
                  "nodeName": "-0.04693655",
                  "type": "TreeModel"
                }], "id": "-0.058682326", "nodeName": "-0.058682326", "type": "TreeModel"
              }, {
                "expression": "v2_v_user_acc_visit_week_cnt_360d lessThan 35.5",
                "id": "-0.058682326",
                "nodeName": "-0.058682326",
                "type": "TreeModel"
              }], "id": "-0.08094425", "nodeName": "-0.08094425", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "acc_max_account_active_range_days lessThan 636.5",
                "id": "-0.039507225",
                "nodeName": "-0.039507225",
                "type": "TreeModel"
              }], "id": "-0.04693655", "nodeName": "-0.04693655", "type": "TreeModel"
            }, {
              "expression": "creditloan_times_avg lessThan 7.5",
              "id": "-0.039507225",
              "nodeName": "-0.039507225",
              "type": "TreeModel"
            }], "id": "-0.032077905", "nodeName": "-0.032077905", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "add_robust_score_a_b_c greaterOrEqual 6.9060497",
                    "id": "-0.07843259",
                    "nodeName": "-0.07843259",
                    "type": "TreeModel"
                  }], "id": "-0.054935344", "nodeName": "-0.054935344", "type": "TreeModel"
                }, {
                  "expression": "cc_usrate_avg lessThan 0.485",
                  "id": "-0.051017087",
                  "nodeName": "-0.051017087",
                  "type": "TreeModel"
                }], "id": "-0.03903451", "nodeName": "-0.03903451", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "unsquare_consume_times_avg lessThan 17.5",
                  "id": "-0.03903451",
                  "nodeName": "-0.03903451",
                  "type": "TreeModel"
                }], "id": "-0.031393483", "nodeName": "-0.031393483", "type": "TreeModel"
              }, {
                "expression": "v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d lessThan 0.006400016",
                "id": "-0.031393483",
                "nodeName": "-0.031393483",
                "type": "TreeModel"
              }], "id": "-0.023752458", "nodeName": "-0.023752458", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "add_robust_score_a_b_c greaterOrEqual 7.76115",
                  "id": "-0.014869593",
                  "nodeName": "-0.014869593",
                  "type": "TreeModel"
                }], "id": "-0.0059867287", "nodeName": "-0.0059867287", "type": "TreeModel"
              }, {
                "expression": "app_score_v2_a_bad_abs_top_avg lessThan -0.104499996",
                "id": "-0.014869593",
                "nodeName": "-0.014869593",
                "type": "TreeModel"
              }], "id": "-0.023752458", "nodeName": "-0.023752458", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "v2_s_max_user_pay_meishi_succ_amt_360d lessThan 8792.0",
                "id": "0.0092644915",
                "nodeName": "0.0092644915",
                "type": "TreeModel"
              }], "id": "-0.0059867287", "nodeName": "-0.0059867287", "type": "TreeModel"
            }, {
              "expression": "v2_r_user_paycftsuccamt_o_payamt_180d greaterOrEqual 0.7197876",
              "id": "0.07303243",
              "nodeName": "0.07303243",
              "type": "TreeModel"
            }], "id": "0.018677602", "nodeName": "0.018677602", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "cc_usrate_100p_cnt lessThan 1.5",
                    "id": "-0.032581143",
                    "nodeName": "-0.032581143",
                    "type": "TreeModel"
                  }], "id": "-0.017221197", "nodeName": "-0.017221197", "type": "TreeModel"
                }, {
                  "expression": "v_all_query_cnt_2y greaterOrEqual 6.5",
                  "id": "-0.017207578",
                  "nodeName": "-0.017207578",
                  "type": "TreeModel"
                }], "id": "-0.032581143", "nodeName": "-0.032581143", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "ln_repay_actual greaterOrEqual 1966.5",
                  "id": "-0.04468407",
                  "nodeName": "-0.04468407",
                  "type": "TreeModel"
                }], "id": "-0.032581143", "nodeName": "-0.032581143", "type": "TreeModel"
              }, {
                "expression": "order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d greaterOrEqual 2.5",
                "id": "-0.04468407",
                "nodeName": "-0.04468407",
                "type": "TreeModel"
              }], "id": "-0.0638204", "nodeName": "-0.0638204", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "v2_r_user_paycftsuccamt_o_payamt_180d greaterOrEqual 0.36826414",
                  "id": "0.14021927",
                  "nodeName": "0.14021927",
                  "type": "TreeModel"
                }], "id": "0.056144543", "nodeName": "0.056144543", "type": "TreeModel"
              }, {
                "expression": "v2_p_user_regweek greaterOrEqual 72.5",
                "id": "0.013470901",
                "nodeName": "0.013470901",
                "type": "TreeModel"
              }], "id": "0.056144543", "nodeName": "0.056144543", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "app_score_v2_cc_limit_avg_head3_plus_tail3 greaterOrEqual 0.7795",
                "id": "-0.0018683383",
                "nodeName": "-0.0018683383",
                "type": "TreeModel"
              }], "id": "0.013470901", "nodeName": "0.013470901", "type": "TreeModel"
            }, {
              "expression": "creditloan_times_avg greaterOrEqual 11.5",
              "id": "-0.0018683383",
              "nodeName": "-0.0018683383",
              "type": "TreeModel"
            }], "id": "-0.017207578", "nodeName": "-0.017207578", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "creditloan_times_avg lessThan 15.5",
                    "id": "-0.014887202",
                    "nodeName": "-0.014887202",
                    "type": "TreeModel"
                  }], "id": "-0.0072996356", "nodeName": "-0.0072996356", "type": "TreeModel"
                }, {
                  "expression": "ln_amt_mbsloan_unsquare_max greaterOrEqual 175500.0",
                  "id": "-0.0072996356",
                  "nodeName": "-0.0072996356",
                  "type": "TreeModel"
                }], "id": "2.8793095E-4", "nodeName": "2.8793095E-4", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "consumerloan_times_avg lessThan 9.5",
                  "id": "2.8793095E-4",
                  "nodeName": "2.8793095E-4",
                  "type": "TreeModel"
                }], "id": "0.02160601", "nodeName": "0.02160601", "type": "TreeModel"
              }, {
                "expression": "v2_r_user_paycftsuccamt_o_payamt_180d greaterOrEqual 0.8069681",
                "id": "0.108859345",
                "nodeName": "0.108859345",
                "type": "TreeModel"
              }], "id": "0.030519817", "nodeName": "0.030519817", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "ln_limit_normal_sum greaterOrEqual 244130.0",
                  "id": "-0.041467614",
                  "nodeName": "-0.041467614",
                  "type": "TreeModel"
                }], "id": "-0.03071802", "nodeName": "-0.03071802", "type": "TreeModel"
              }, {
                "expression": "order_all_order_hour_seg_eq_late_night_size_ratio_360d lessThan 0.09275",
                "id": "-0.062114224",
                "nodeName": "-0.062114224",
                "type": "TreeModel"
              }], "id": "-0.041467614", "nodeName": "-0.041467614", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "ln_mob_internet_min_v3 lessThan 5.3050003",
                "id": "-0.03071802",
                "nodeName": "-0.03071802",
                "type": "TreeModel"
              }], "id": "-0.02280261", "nodeName": "-0.02280261", "type": "TreeModel"
            }, {
              "expression": "sp_s_sum_user_sp_alipay_pay_succ_amt_6m greaterOrEqual 118.91",
              "id": "-0.02280261",
              "nodeName": "-0.02280261",
              "type": "TreeModel"
            }], "id": "-0.014887202", "nodeName": "-0.014887202", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "expression": "consumerloan_times_avg greaterOrEqual 18.5",
                  "id": "0.014175935",
                  "nodeName": "0.014175935",
                  "type": "TreeModel"
                }, {
                  "expression": "cc_usrate_max greaterOrEqual 1.035",
                  "id": "0.0058036004",
                  "nodeName": "0.0058036004",
                  "type": "TreeModel"
                }], "id": "-0.0025687339", "nodeName": "-0.0025687339", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "ln_repay_actual greaterOrEqual 247.5",
                  "id": "0.04822301",
                  "nodeName": "0.04822301",
                  "type": "TreeModel"
                }], "id": "0.12619463", "nodeName": "0.12619463", "type": "TreeModel"
              }, {
                "expression": "cc_usrate_100p_cnt greaterOrEqual 0.5",
                "id": "0.04822301",
                "nodeName": "0.04822301",
                "type": "TreeModel"
              }], "id": "0.014175935", "nodeName": "0.014175935", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "app_score_v2_a_bad_abs_top_avg lessThan 0.1625",
                  "id": "-0.04161068",
                  "nodeName": "-0.04161068",
                  "type": "TreeModel"
                }], "id": "-0.060886204", "nodeName": "-0.060886204", "type": "TreeModel"
              }, {
                "expression": "add_robust_score_a_b_c lessThan 8.9846",
                "id": "-0.02861851",
                "nodeName": "-0.02861851",
                "type": "TreeModel"
              }], "id": "-0.04161068", "nodeName": "-0.04161068", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "cc_usrate_100p_cnt greaterOrEqual 0.5",
                "id": "-0.014770038",
                "nodeName": "-0.014770038",
                "type": "TreeModel"
              }], "id": "-0.02861851", "nodeName": "-0.02861851", "type": "TreeModel"
            }, {
              "expression": "v_credit_query_cnt_2y greaterOrEqual 2.5",
              "id": "-0.0025687339",
              "nodeName": "-0.0025687339",
              "type": "TreeModel"
            }], "id": "-0.014770038", "nodeName": "-0.014770038", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "overduehighestmonthlyofloan greaterOrEqual -1.0E-6",
                    "id": "-0.07351502",
                    "nodeName": "-0.07351502",
                    "type": "TreeModel"
                  }], "id": "-0.09526744", "nodeName": "-0.09526744", "type": "TreeModel"
                }, {
                  "expression": "order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d greaterOrEqual 0.0281",
                  "id": "-0.051225282",
                  "nodeName": "-0.051225282",
                  "type": "TreeModel"
                }], "id": "-0.071482316", "nodeName": "-0.071482316", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "cc_mob_max_now greaterOrEqual 73.015",
                  "id": "-0.040085178",
                  "nodeName": "-0.040085178",
                  "type": "TreeModel"
                }], "id": "-0.028945075", "nodeName": "-0.028945075", "type": "TreeModel"
              }, {
                "expression": "idnbankallm3applyorgnumt greaterOrEqual 5.5",
                "id": "-0.040085178",
                "nodeName": "-0.040085178",
                "type": "TreeModel"
              }], "id": "-0.051225282", "nodeName": "-0.051225282", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "ln_limit_normal_sum lessThan 12427.0",
                "id": "0.24986567",
                "nodeName": "0.24986567",
                "type": "TreeModel"
              }, {
                "expression": "cc_mob_max_now greaterOrEqual 22.335",
                "id": "0.048543032",
                "nodeName": "0.048543032",
                "type": "TreeModel"
              }], "id": "0.10602633", "nodeName": "0.10602633", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "unsquare_consume_balance_max greaterOrEqual 11005.5",
                "id": "0.048543032",
                "nodeName": "0.048543032",
                "type": "TreeModel"
              }], "id": "-7.95046E-4", "nodeName": "-7.95046E-4", "type": "TreeModel"
            }, {
              "expression": "v2_r_user_paycftsuccamt_o_payamt_360d greaterOrEqual 0.39964634",
              "id": "-0.009967983",
              "nodeName": "-0.009967983",
              "type": "TreeModel"
            }], "id": "-0.028945075", "nodeName": "-0.028945075", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "r_credit_succ_after_query_cnt_o_credit_query_cnt_2y lessThan 0.62828946",
                    "id": "0.021736043",
                    "nodeName": "0.021736043",
                    "type": "TreeModel"
                  }], "id": "0.01248285", "nodeName": "0.01248285", "type": "TreeModel"
                }, {
                  "expression": "acc_avg_account_reg_days lessThan 608.5",
                  "id": "0.01248285",
                  "nodeName": "0.01248285",
                  "type": "TreeModel"
                }], "id": "0.0032296563", "nodeName": "0.0032296563", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "add_robust_score_a_b greaterOrEqual 4.1809998",
                  "id": "0.05879121",
                  "nodeName": "0.05879121",
                  "type": "TreeModel"
                }], "id": "0.12429689", "nodeName": "0.12429689", "type": "TreeModel"
              }, {
                "expression": "v2_r_user_paycftsuccamt_o_payamt_180d greaterOrEqual 0.4136013",
                "id": "0.05879121",
                "nodeName": "0.05879121",
                "type": "TreeModel"
              }], "id": "0.021736043", "nodeName": "0.021736043", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "v_all_query_cnt_2y greaterOrEqual 7.5",
                  "id": "-0.017993646",
                  "nodeName": "-0.017993646",
                  "type": "TreeModel"
                }], "id": "-0.032766566", "nodeName": "-0.032766566", "type": "TreeModel"
              }, {
                "expression": "cc_usrate_max greaterOrEqual 0.915",
                "id": "-0.03427128",
                "nodeName": "-0.03427128",
                "type": "TreeModel"
              }], "id": "-0.061232094", "nodeName": "-0.061232094", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "overduehighestmonthlyofloan greaterOrEqual -1.0E-6",
                "id": "-0.0073819947",
                "nodeName": "-0.0073819947",
                "type": "TreeModel"
              }], "id": "-0.017993646", "nodeName": "-0.017993646", "type": "TreeModel"
            }, {
              "expression": "idcellnbankallm3applyorgnumt lessThan 0.5",
              "id": "-0.0073819947",
              "nodeName": "-0.0073819947",
              "type": "TreeModel"
            }], "id": "0.0032296563", "nodeName": "0.0032296563", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "expression": "v_credit_query_cnt_2y greaterOrEqual 6.5",
                  "id": "0.13672112",
                  "nodeName": "0.13672112",
                  "type": "TreeModel"
                }], "id": "0.07100022", "nodeName": "0.07100022", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "ln_amt_l6th_creditloan greaterOrEqual 6688.5",
                  "id": "0.037841275",
                  "nodeName": "0.037841275",
                  "type": "TreeModel"
                }], "id": "0.018659627", "nodeName": "0.018659627", "type": "TreeModel"
              }, {
                "expression": "ln_mob_internet_min_v3 lessThan 2.665",
                "id": "0.037841275",
                "nodeName": "0.037841275",
                "type": "TreeModel"
              }], "id": "0.07100022", "nodeName": "0.07100022", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "ln_mob_internet_min_v3 lessThan 1.465",
                  "id": "-0.04462989",
                  "nodeName": "-0.04462989",
                  "type": "TreeModel"
                }], "id": "-0.03053408", "nodeName": "-0.03053408", "type": "TreeModel"
              }, {
                "expression": "ln_repay_actual lessThan 25222.5",
                "id": "-0.054160997",
                "nodeName": "-0.054160997",
                "type": "TreeModel"
              }], "id": "-0.093270324", "nodeName": "-0.093270324", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d greaterOrEqual 0.004324329",
                "id": "-0.0015439764",
                "nodeName": "-0.0015439764",
                "type": "TreeModel"
              }], "id": "-0.02970054", "nodeName": "-0.02970054", "type": "TreeModel"
            }, {
              "expression": "ln_mob_internet_min_v3 lessThan 4.825",
              "id": "-0.0014659822",
              "nodeName": "-0.0014659822",
              "type": "TreeModel"
            }], "id": "0.018659627", "nodeName": "0.018659627", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "v2_p_user_regday lessThan 721.5",
                    "id": "0.07052525",
                    "nodeName": "0.07052525",
                    "type": "TreeModel"
                  }], "id": "0.029833917", "nodeName": "0.029833917", "type": "TreeModel"
                }, {
                  "expression": "r_credit_succ_after_query_cnt_o_credit_query_cnt_2y lessThan 0.3766892",
                  "id": "0.1501435",
                  "nodeName": "0.1501435",
                  "type": "TreeModel"
                }], "id": "0.07052525", "nodeName": "0.07052525", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "idcellnbankallm3applyorgnumt lessThan 7.5",
                  "id": "0.0046200193",
                  "nodeName": "0.0046200193",
                  "type": "TreeModel"
                }], "id": "0.017226968", "nodeName": "0.017226968", "type": "TreeModel"
              }, {
                "expression": "mortgageloan_repay_actual lessThan 2088.0",
                "id": "0.029833917",
                "nodeName": "0.029833917",
                "type": "TreeModel"
              }], "id": "0.017226968", "nodeName": "0.017226968", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "cc_mob_max_now greaterOrEqual 76.955",
                  "id": "-0.0017186627",
                  "nodeName": "-0.0017186627",
                  "type": "TreeModel"
                }], "id": "0.0046200193", "nodeName": "0.0046200193", "type": "TreeModel"
              }, {
                "expression": "creditloan_times_avg lessThan 11.5",
                "id": "-0.008057345",
                "nodeName": "-0.008057345",
                "type": "TreeModel"
              }], "id": "-0.0017186627", "nodeName": "-0.0017186627", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "v_credit_query_cnt_2y greaterOrEqual 6.5",
                "id": "-0.02449769",
                "nodeName": "-0.02449769",
                "type": "TreeModel"
              }], "id": "-0.04795988", "nodeName": "-0.04795988", "type": "TreeModel"
            }, {
              "expression": "app_score_v2_cc_limit_avg_head3_plus_tail3 greaterOrEqual 0.46850002",
              "id": "-0.02449769",
              "nodeName": "-0.02449769",
              "type": "TreeModel"
            }], "id": "-0.008057345", "nodeName": "-0.008057345", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "ln_amt_l6th_creditloan greaterOrEqual 19299.0",
                    "id": "-0.02365635",
                    "nodeName": "-0.02365635",
                    "type": "TreeModel"
                  }], "id": "-0.031097747", "nodeName": "-0.031097747", "type": "TreeModel"
                }, {
                  "expression": "ln_limit_normal_sum greaterOrEqual 388895.0",
                  "id": "-0.02365635",
                  "nodeName": "-0.02365635",
                  "type": "TreeModel"
                }], "id": "-0.016214954", "nodeName": "-0.016214954", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "v2_s_max_user_pay_meishi_succ_amt_360d lessThan 9899.0",
                  "id": "-0.043204345",
                  "nodeName": "-0.043204345",
                  "type": "TreeModel"
                }], "id": "-0.06283561", "nodeName": "-0.06283561", "type": "TreeModel"
              }, {
                "expression": "v2_r_user_paycftsuccamt_o_payamt_360d greaterOrEqual 0.029856287",
                "id": "-0.031097747",
                "nodeName": "-0.031097747",
                "type": "TreeModel"
              }], "id": "-0.043204345", "nodeName": "-0.043204345", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "ln_limit_normal_sum greaterOrEqual 2000.5",
                  "id": "0.04892229",
                  "nodeName": "0.04892229",
                  "type": "TreeModel"
                }], "id": "0.14130728", "nodeName": "0.14130728", "type": "TreeModel"
              }, {
                "expression": "app_score_v2_a_bad_abs_top_avg lessThan 0.0555",
                "id": "0.04892229",
                "nodeName": "0.04892229",
                "type": "TreeModel"
              }], "id": "0.011606776", "nodeName": "0.011606776", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "idcellnbankp2pm3applyorgnumt greaterOrEqual 1.5",
                "id": "-0.004047243",
                "nodeName": "-0.004047243",
                "type": "TreeModel"
              }], "id": "-0.016214954", "nodeName": "-0.016214954", "type": "TreeModel"
            }, {
              "expression": "cc_usrate_avg greaterOrEqual 0.315",
              "id": "0.009838368",
              "nodeName": "0.009838368",
              "type": "TreeModel"
            }], "id": "-0.004047243", "nodeName": "-0.004047243", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "overduehighestmonthlyofloan greaterOrEqual -1.0E-6",
                    "id": "0.08365495",
                    "nodeName": "0.08365495",
                    "type": "TreeModel"
                  }], "id": "0.042040173", "nodeName": "0.042040173", "type": "TreeModel"
                }], "id": "0.11444307", "nodeName": "0.11444307", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "cc_usrate_100p_cnt lessThan 1.5",
                  "id": "0.0128370095",
                  "nodeName": "0.0128370095",
                  "type": "TreeModel"
                }], "id": "0.027438592", "nodeName": "0.027438592", "type": "TreeModel"
              }, {
                "expression": "mortgageloan_repay_actual lessThan 1073.0",
                "id": "0.042040173",
                "nodeName": "0.042040173",
                "type": "TreeModel"
              }], "id": "0.027438592", "nodeName": "0.027438592", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "ln_limit_normal_sum greaterOrEqual 250501.0",
                  "id": "0.005307826",
                  "nodeName": "0.005307826",
                  "type": "TreeModel"
                }], "id": "0.0128370095", "nodeName": "0.0128370095", "type": "TreeModel"
              }, {
                "expression": "qry_times_self_l1st lessThan 0.5",
                "id": "-0.0022213566",
                "nodeName": "-0.0022213566",
                "type": "TreeModel"
              }], "id": "0.005307826", "nodeName": "0.005307826", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "ln_repay_actual greaterOrEqual 3233.5",
                "id": "-0.015555391",
                "nodeName": "-0.015555391",
                "type": "TreeModel"
              }], "id": "-0.0022213566", "nodeName": "-0.0022213566", "type": "TreeModel"
            }, {
              "expression": "acc_max_account_active_range_days greaterOrEqual 627.5",
              "id": "-0.037430223",
              "nodeName": "-0.037430223",
              "type": "TreeModel"
            }], "id": "-0.015555391", "nodeName": "-0.015555391", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "expression": "ln_amt_l6th_creditloan greaterOrEqual 41595.0",
                  "id": "0.027850498",
                  "nodeName": "0.027850498",
                  "type": "TreeModel"
                }], "id": "0.010389514", "nodeName": "0.010389514", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "v2_p_user_regday greaterOrEqual 575.5",
                  "id": "0.029884364",
                  "nodeName": "0.029884364",
                  "type": "TreeModel"
                }], "id": "0.07182043", "nodeName": "0.07182043", "type": "TreeModel"
              }], "id": "0.10622935", "nodeName": "0.10622935", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "creditloan_times_avg greaterOrEqual 12.5",
                  "id": "-0.023626417",
                  "nodeName": "-0.023626417",
                  "type": "TreeModel"
                }], "id": "-0.041623875", "nodeName": "-0.041623875", "type": "TreeModel"
              }, {
                "expression": "ln_repay_actual greaterOrEqual 7672.5",
                "id": "-0.023626417",
                "nodeName": "-0.023626417",
                "type": "TreeModel"
              }], "id": "-0.012248645", "nodeName": "-0.012248645", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "ln_mob_internet_min_v3 lessThan 7.9849997",
                "id": "-0.012248645",
                "nodeName": "-0.012248645",
                "type": "TreeModel"
              }], "id": "-9.2956517E-4", "nodeName": "-9.2956517E-4", "type": "TreeModel"
            }, {
              "expression": "v2_p_user_regday greaterOrEqual 1267.5",
              "id": "-9.2956517E-4",
              "nodeName": "-9.2956517E-4",
              "type": "TreeModel"
            }], "id": "0.010389514", "nodeName": "0.010389514", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "cc_mob_max_now lessThan 71.305",
                    "id": "-0.01586927",
                    "nodeName": "-0.01586927",
                    "type": "TreeModel"
                  }], "id": "-0.031817332", "nodeName": "-0.031817332", "type": "TreeModel"
                }, {
                  "expression": "wm_add_r_user_wm_add_xiuxianyule_o_total greaterOrEqual 0.0322",
                  "id": "-0.031817332",
                  "nodeName": "-0.031817332",
                  "type": "TreeModel"
                }], "id": "-0.051283106", "nodeName": "-0.051283106", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "ln_ever_amt_max greaterOrEqual 5589.0",
                  "id": "-0.01586927",
                  "nodeName": "-0.01586927",
                  "type": "TreeModel"
                }], "id": "-0.009927638", "nodeName": "-0.009927638", "type": "TreeModel"
              }, {
                "expression": "app_score_v2_a_bad_abs_top_avg greaterOrEqual 0.23249999",
                "id": "-0.009927638",
                "nodeName": "-0.009927638",
                "type": "TreeModel"
              }], "id": "-0.003986006", "nodeName": "-0.003986006", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "v2_s_max_user_pay_meishi_succ_amt_360d lessThan 4921.0",
                  "id": "0.04630462",
                  "nodeName": "0.04630462",
                  "type": "TreeModel"
                }], "id": "0.01791991", "nodeName": "0.01791991", "type": "TreeModel"
              }, {
                "expression": "wm_add_r_user_wm_add_xiuxianyule_o_total lessThan 0.07585",
                "id": "0.05760767",
                "nodeName": "0.05760767",
                "type": "TreeModel"
              }], "id": "0.13754797", "nodeName": "0.13754797", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "cc_usrate_100p_cnt greaterOrEqual 0.5",
                "id": "0.0069669513",
                "nodeName": "0.0069669513",
                "type": "TreeModel"
              }], "id": "-0.003986006", "nodeName": "-0.003986006", "type": "TreeModel"
            }, {
              "expression": "sp_s_sum_user_sp_alipay_pay_succ_amt_6m greaterOrEqual 240.2",
              "id": "0.0069669513",
              "nodeName": "0.0069669513",
              "type": "TreeModel"
            }], "id": "0.01791991", "nodeName": "0.01791991", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "expression": "v2_s_max_user_pay_meishi_succ_amt_360d lessThan 17815.0",
                  "id": "-0.024309698",
                  "nodeName": "-0.024309698",
                  "type": "TreeModel"
                }], "id": "-0.039406076", "nodeName": "-0.039406076", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "r_credit_succ_after_query_cnt_o_credit_query_cnt_2y greaterOrEqual 0.4564394",
                  "id": "-0.05051353",
                  "nodeName": "-0.05051353",
                  "type": "TreeModel"
                }], "id": "-0.039406076", "nodeName": "-0.039406076", "type": "TreeModel"
              }, {
                "expression": "ln_limit_normal_sum lessThan 431410.0",
                "id": "-0.05051353",
                "nodeName": "-0.05051353",
                "type": "TreeModel"
              }], "id": "-0.0751745", "nodeName": "-0.0751745", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "ln_limit_normal_sum lessThan 9473.5",
                "id": "0.20069605",
                "nodeName": "0.20069605",
                "type": "TreeModel"
              }, {
                "expression": "order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d greaterOrEqual 0.18044999",
                "id": "0.12077792",
                "nodeName": "0.12077792",
                "type": "TreeModel"
              }], "id": "0.035723764", "nodeName": "0.035723764", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "consumerloan_times_avg lessThan 9.5",
                "id": "-0.009551819",
                "nodeName": "-0.009551819",
                "type": "TreeModel"
              }], "id": "0.014110866", "nodeName": "0.014110866", "type": "TreeModel"
            }, {
              "expression": "v2_s_max_user_pay_meishi_succ_amt_360d greaterOrEqual 7250.5",
              "id": "-0.024309698",
              "nodeName": "-0.024309698",
              "type": "TreeModel"
            }], "id": "-0.010313129", "nodeName": "-0.010313129", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "expression": "qry_times_self_l1st greaterOrEqual 0.5",
                "id": "0.026307698",
                "nodeName": "0.026307698",
                "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "v2_r_user_paycftsuccamt_o_payamt_180d greaterOrEqual 0.15689957",
                  "id": "-0.012584876",
                  "nodeName": "-0.012584876",
                  "type": "TreeModel"
                }], "id": "-0.042390633", "nodeName": "-0.042390633", "type": "TreeModel"
              }, {
                "expression": "unsquare_consume_times_avg lessThan 11.5",
                "id": "-0.07065094",
                "nodeName": "-0.07065094",
                "type": "TreeModel"
              }], "id": "-0.04260415", "nodeName": "-0.04260415", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "ln_mob_internet_min_v3 greaterOrEqual 5.855",
                  "id": "0.103161685",
                  "nodeName": "0.103161685",
                  "type": "TreeModel"
                }], "id": "0.04178055", "nodeName": "0.04178055", "type": "TreeModel"
              }], "id": "0.19595337", "nodeName": "0.19595337", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "v2_s_max_user_pay_meishi_succ_amt_360d greaterOrEqual 12752.5",
                "id": "0.015497193",
                "nodeName": "0.015497193",
                "type": "TreeModel"
              }], "id": "0.04178055", "nodeName": "0.04178055", "type": "TreeModel"
            }, {
              "expression": "cc_usrate_100p_cnt greaterOrEqual 0.5",
              "id": "0.012546983",
              "nodeName": "0.012546983",
              "type": "TreeModel"
            }], "id": "-0.013171258", "nodeName": "-0.013171258", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "expression": "ln_repay_actual greaterOrEqual 423.5",
                  "id": "0.06467657",
                  "nodeName": "0.06467657",
                  "type": "TreeModel"
                }], "id": "0.14892325", "nodeName": "0.14892325", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "app_score_v2_a_bad_abs_top_avg lessThan -0.1895",
                  "id": "0.036612634",
                  "nodeName": "0.036612634",
                  "type": "TreeModel"
                }], "id": "0.0129453", "nodeName": "0.0129453", "type": "TreeModel"
              }, {
                "expression": "ln_repay_actual lessThan 2004.5",
                "id": "0.06467657",
                "nodeName": "0.06467657",
                "type": "TreeModel"
              }], "id": "0.036612634", "nodeName": "0.036612634", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "v2_p_user_regday greaterOrEqual 1311.5",
                  "id": "-0.0355577",
                  "nodeName": "-0.0355577",
                  "type": "TreeModel"
                }], "id": "-0.021921737", "nodeName": "-0.021921737", "type": "TreeModel"
              }, {
                "expression": "app_score_v2_a_bad_abs_top_avg lessThan 0.27850002",
                "id": "-0.038279235",
                "nodeName": "-0.038279235",
                "type": "TreeModel"
              }], "id": "-0.06506048", "nodeName": "-0.06506048", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "v2_s_max_user_pay_meishi_succ_amt_360d greaterOrEqual 20965.0",
                "id": "0.0017270655",
                "nodeName": "0.0017270655",
                "type": "TreeModel"
              }], "id": "0.0129453", "nodeName": "0.0129453", "type": "TreeModel"
            }, {
              "expression": "cc_usrate_100p_cnt greaterOrEqual 0.5",
              "id": "0.0017270655",
              "nodeName": "0.0017270655",
              "type": "TreeModel"
            }], "id": "-0.016352426", "nodeName": "-0.016352426", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "v2_p_user_regday lessThan 215.5",
                    "id": "0.058571447",
                    "nodeName": "0.058571447",
                    "type": "TreeModel"
                  }], "id": "0.030731635", "nodeName": "0.030731635", "type": "TreeModel"
                }, {
                  "expression": "r_credit_succ_after_query_cnt_o_credit_query_cnt_2y lessThan 0.2546296",
                  "id": "0.15445915",
                  "nodeName": "0.15445915",
                  "type": "TreeModel"
                }], "id": "0.058571447", "nodeName": "0.058571447", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "add_robust_score_a_b greaterOrEqual 3.6845999",
                  "id": "0.017791996",
                  "nodeName": "0.017791996",
                  "type": "TreeModel"
                }], "id": "0.030731635", "nodeName": "0.030731635", "type": "TreeModel"
              }, {
                "expression": "add_robust_score_a_b greaterOrEqual 2.39815",
                "id": "0.0048523573",
                "nodeName": "0.0048523573",
                "type": "TreeModel"
              }], "id": "0.017791996", "nodeName": "0.017791996", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "app_score_v2_a_bad_abs_top_avg lessThan 0.13949999",
                  "id": "-0.0035964698",
                  "nodeName": "-0.0035964698",
                  "type": "TreeModel"
                }], "id": "-0.012045297", "nodeName": "-0.012045297", "type": "TreeModel"
              }, {
                "expression": "ln_repay_actual greaterOrEqual 3330.5",
                "id": "-0.0035964698",
                "nodeName": "-0.0035964698",
                "type": "TreeModel"
              }], "id": "0.0048523573", "nodeName": "0.0048523573", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "overduehighestmonthlyofloan greaterOrEqual -1.0E-6",
                "id": "-0.027367214",
                "nodeName": "-0.027367214",
                "type": "TreeModel"
              }], "id": "-0.047373068", "nodeName": "-0.047373068", "type": "TreeModel"
            }, {
              "expression": "v_all_query_cnt_2y greaterOrEqual 5.5",
              "id": "-0.012045297",
              "nodeName": "-0.012045297",
              "type": "TreeModel"
            }], "id": "-0.027367214", "nodeName": "-0.027367214", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "wm_add_r_user_wm_add_xiuxianyule_o_total lessThan 0.01125",
                    "id": "-0.057995442",
                    "nodeName": "-0.057995442",
                    "type": "TreeModel"
                  }], "id": "-0.037959076", "nodeName": "-0.037959076", "type": "TreeModel"
                }, {
                  "expression": "cc_usrate_avg lessThan 0.35500002",
                  "id": "-0.037959076",
                  "nodeName": "-0.037959076",
                  "type": "TreeModel"
                }], "id": "-0.02582829", "nodeName": "-0.02582829", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "v2_r_user_paycftsuccamt_o_payamt_360d greaterOrEqual 0.4124054",
                  "id": "-0.019397778",
                  "nodeName": "-0.019397778",
                  "type": "TreeModel"
                }], "id": "-0.02582829", "nodeName": "-0.02582829", "type": "TreeModel"
              }, {
                "expression": "ln_amt_mbsloan_unsquare_max greaterOrEqual 118999.0",
                "id": "-0.019397778",
                "nodeName": "-0.019397778",
                "type": "TreeModel"
              }], "id": "-0.012967266", "nodeName": "-0.012967266", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "ln_amt_l6th_creditloan greaterOrEqual 43875.0",
                "id": "0.10002548",
                "nodeName": "0.10002548",
                "type": "TreeModel"
              }, {
                "expression": "ln_mob_internet_min_v3 lessThan 2.955",
                "id": "0.024773572",
                "nodeName": "0.024773572",
                "type": "TreeModel"
              }], "id": "0.06424212", "nodeName": "0.06424212", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "v2_s_max_user_pay_meishi_succ_amt_360d lessThan 16799.5",
                "id": "0.024304623",
                "nodeName": "0.024304623",
                "type": "TreeModel"
              }], "id": "0.002941731", "nodeName": "0.002941731", "type": "TreeModel"
            }, {
              "expression": "add_robust_score_a_b greaterOrEqual 2.605",
              "id": "-0.012967266",
              "nodeName": "-0.012967266",
              "type": "TreeModel"
            }], "id": "0.002941731", "nodeName": "0.002941731", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "expression": "v2_r_user_paycftsuccamt_o_payamt_180d greaterOrEqual 0.12690079",
                  "id": "-0.047351364",
                  "nodeName": "-0.047351364",
                  "type": "TreeModel"
                }], "id": "-0.08265727", "nodeName": "-0.08265727", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "ln_amt_l6th_creditloan greaterOrEqual 26291.5",
                  "id": "-0.035940494",
                  "nodeName": "-0.035940494",
                  "type": "TreeModel"
                }], "id": "-0.061505526", "nodeName": "-0.061505526", "type": "TreeModel"
              }, {
                "expression": "v2_s_max_user_pay_meishi_succ_amt_360d lessThan 32415.0",
                "id": "-0.018657614",
                "nodeName": "-0.018657614",
                "type": "TreeModel"
              }], "id": "-0.035940494", "nodeName": "-0.035940494", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "idcellnbankp2pm3applyorgnumt greaterOrEqual 2.5",
                  "id": "0.030194333",
                  "nodeName": "0.030194333",
                  "type": "TreeModel"
                }], "id": "0.010004557", "nodeName": "0.010004557", "type": "TreeModel"
              }, {
                "expression": "ln_repay_actual greaterOrEqual 505.5",
                "id": "0.030194333",
                "nodeName": "0.030194333",
                "type": "TreeModel"
              }], "id": "0.09256497", "nodeName": "0.09256497", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "ln_amt_l6th_creditloan greaterOrEqual 15299.5",
                "id": "-0.007596265",
                "nodeName": "-0.007596265",
                "type": "TreeModel"
              }], "id": "-0.018657614", "nodeName": "-0.018657614", "type": "TreeModel"
            }, {
              "expression": "cc_usrate_avg lessThan 0.515",
              "id": "-0.007596265",
              "nodeName": "-0.007596265",
              "type": "TreeModel"
            }], "id": "0.010004557", "nodeName": "0.010004557", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "expression": "ln_amt_l6th_creditloan greaterOrEqual 22541.0",
                  "id": "0.09389722",
                  "nodeName": "0.09389722",
                  "type": "TreeModel"
                }, {
                  "expression": "ln_mob_internet_min_v3 lessThan 10.535",
                  "id": "0.027067877",
                  "nodeName": "0.027067877",
                  "type": "TreeModel"
                }], "id": "0.062836915", "nodeName": "0.062836915", "type": "TreeModel"
              }, {
                "expression": "creditloan_times_avg greaterOrEqual 15.5",
                "id": "0.027067877",
                "nodeName": "0.027067877",
                "type": "TreeModel"
              }], "id": "0.011961587", "nodeName": "0.011961587", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "ln_amt_l6th_creditloan greaterOrEqual 20101.5",
                  "id": "0.003269549",
                  "nodeName": "0.003269549",
                  "type": "TreeModel"
                }], "id": "-0.005422489", "nodeName": "-0.005422489", "type": "TreeModel"
              }, {
                "expression": "app_score_v2_a_bad_abs_top_avg greaterOrEqual 0.1275",
                "id": "0.003269549",
                "nodeName": "0.003269549",
                "type": "TreeModel"
              }], "id": "0.011961587", "nodeName": "0.011961587", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "ln_repay_actual greaterOrEqual 5176.5",
                "id": "-0.015357535",
                "nodeName": "-0.015357535",
                "type": "TreeModel"
              }], "id": "-0.005422489", "nodeName": "-0.005422489", "type": "TreeModel"
            }, {
              "expression": "app_score_v2_a_bad_abs_top_avg lessThan 0.14250001",
              "id": "-0.015357535",
              "nodeName": "-0.015357535",
              "type": "TreeModel"
            }], "id": "-0.031473592", "nodeName": "-0.031473592", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "sp_s_sum_user_sp_alipay_pay_succ_amt_6m greaterOrEqual 30.1",
                    "id": "-0.036211066",
                    "nodeName": "-0.036211066",
                    "type": "TreeModel"
                  }], "id": "-0.020545501", "nodeName": "-0.020545501", "type": "TreeModel"
                }, {
                  "expression": "app_score_v2_a_bad_abs_top_avg lessThan 0.3075",
                  "id": "-0.037022565",
                  "nodeName": "-0.037022565",
                  "type": "TreeModel"
                }], "id": "-0.065368585", "nodeName": "-0.065368585", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "app_t2_chuxing_che_youche greaterOrEqual -9.536743E-7",
                  "id": "0.004786842",
                  "nodeName": "0.004786842",
                  "type": "TreeModel"
                }], "id": "0.01607952", "nodeName": "0.01607952", "type": "TreeModel"
              }, {
                "expression": "v_credit_query_cnt_2y greaterOrEqual 3.5",
                "id": "0.0020443657",
                "nodeName": "0.0020443657",
                "type": "TreeModel"
              }], "id": "-0.019466257", "nodeName": "-0.019466257", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "unsquare_consume_balance lessThan 11369.0",
                  "id": "0.0384695",
                  "nodeName": "0.0384695",
                  "type": "TreeModel"
                }], "id": "0.07004973", "nodeName": "0.07004973", "type": "TreeModel"
              }], "id": "0.09557494", "nodeName": "0.09557494", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "app_score_v2_a_bad_abs_top_avg lessThan 0.0785",
                "id": "0.027274512",
                "nodeName": "0.027274512",
                "type": "TreeModel"
              }], "id": "0.01607952", "nodeName": "0.01607952", "type": "TreeModel"
            }], "id": "0.0384695", "nodeName": "0.0384695", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "expression": "qry_times_self_l1st greaterOrEqual 0.5",
                "id": "-0.015097986",
                "nodeName": "-0.015097986",
                "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "app_score_v2_a_bad_abs_top_avg greaterOrEqual 0.0275",
                  "id": "-0.04032109",
                  "nodeName": "-0.04032109",
                  "type": "TreeModel"
                }], "id": "-0.026766311", "nodeName": "-0.026766311", "type": "TreeModel"
              }, {
                "expression": "order_all_order_hour_seg_eq_late_night_size_ratio_360d greaterOrEqual 0.15485",
                "id": "-0.04032109",
                "nodeName": "-0.04032109",
                "type": "TreeModel"
              }], "id": "-0.06078046", "nodeName": "-0.06078046", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "cc_usrate_max lessThan 0.855",
                  "id": "-0.00918031",
                  "nodeName": "-0.00918031",
                  "type": "TreeModel"
                }], "id": "-0.0032626344", "nodeName": "-0.0032626344", "type": "TreeModel"
              }, {
                "expression": "app_score_v2_a_bad_abs_top_avg lessThan 0.12650001",
                "id": "-0.00918031",
                "nodeName": "-0.00918031",
                "type": "TreeModel"
              }], "id": "-0.015097986", "nodeName": "-0.015097986", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "consumerloan_times_avg lessThan 13.5",
                "id": "0.022456115",
                "nodeName": "0.022456115",
                "type": "TreeModel"
              }], "id": "0.06866651", "nodeName": "0.06866651", "type": "TreeModel"
            }, {
              "expression": "ln_ever_amt_max greaterOrEqual 5998.5",
              "id": "-0.0032626344",
              "nodeName": "-0.0032626344",
              "type": "TreeModel"
            }], "id": "0.017227406", "nodeName": "0.017227406", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "ln_limit_normal_sum greaterOrEqual 258550.0",
                    "id": "0.017085902",
                    "nodeName": "0.017085902",
                    "type": "TreeModel"
                  }], "id": "0.026993461", "nodeName": "0.026993461", "type": "TreeModel"
                }, {
                  "expression": "cc_usrate_max greaterOrEqual 1.005",
                  "id": "0.017085902",
                  "nodeName": "0.017085902",
                  "type": "TreeModel"
                }], "id": "0.0071783448", "nodeName": "0.0071783448", "type": "TreeModel"
              }, {
                "expression": "app_score_v2_cc_limit_avg_head3_plus_tail3 lessThan 0.0365",
                "id": "0.10551285",
                "nodeName": "0.10551285",
                "type": "TreeModel"
              }, {
                "expression": "ln_delq_l12m_lvl1p_times_v2 lessThan 0.5",
                "id": "0.027579859",
                "nodeName": "0.027579859",
                "type": "TreeModel"
              }], "id": "0.07059978", "nodeName": "0.07059978", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "app_score_v2_cc_limit_avg_head3_plus_tail3 lessThan 0.3565",
                  "id": "-0.022170305",
                  "nodeName": "-0.022170305",
                  "type": "TreeModel"
                }], "id": "-0.042535115", "nodeName": "-0.042535115", "type": "TreeModel"
              }, {
                "expression": "v2_r_user_paycftsuccamt_o_payamt_360d greaterOrEqual 0.14710048",
                "id": "-0.05083835",
                "nodeName": "-0.05083835",
                "type": "TreeModel"
              }], "id": "-0.08135677", "nodeName": "-0.08135677", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "v_credit_query_cnt_2y greaterOrEqual 6.5",
                "id": "-0.0069119334",
                "nodeName": "-0.0069119334",
                "type": "TreeModel"
              }], "id": "-0.022170305", "nodeName": "-0.022170305", "type": "TreeModel"
            }, {
              "expression": "cc_usrate_max lessThan 0.865",
              "id": "-0.0069119334",
              "nodeName": "-0.0069119334",
              "type": "TreeModel"
            }], "id": "0.0071783448", "nodeName": "0.0071783448", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "idcellnbankp2pm3applyorgnumt lessThan 1.5",
                    "id": "0.036043562",
                    "nodeName": "0.036043562",
                    "type": "TreeModel"
                  }], "id": "0.06185861", "nodeName": "0.06185861", "type": "TreeModel"
                }, {
                  "expression": "overduehighestmonthlyofloan greaterOrEqual -1.0E-6",
                  "id": "0.1101806",
                  "nodeName": "0.1101806",
                  "type": "TreeModel"
                }], "id": "0.06574268", "nodeName": "0.06574268", "type": "TreeModel"
              }, {
                "expression": "ln_amt_l6th_creditloan greaterOrEqual 20354.5",
                "id": "0.036043562",
                "nodeName": "0.036043562",
                "type": "TreeModel"
              }], "id": "0.014922542", "nodeName": "0.014922542", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "idcellnbankp2pm3applyorgnumt greaterOrEqual 0.5",
                  "id": "-0.019420344",
                  "nodeName": "-0.019420344",
                  "type": "TreeModel"
                }], "id": "-0.041645594", "nodeName": "-0.041645594", "type": "TreeModel"
              }, {
                "expression": "add_robust_score_a_b_c greaterOrEqual 8.0835495",
                "id": "-0.019420344",
                "nodeName": "-0.019420344",
                "type": "TreeModel"
              }], "id": "-0.009599997", "nodeName": "-0.009599997", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "app_score_v2_cc_limit_avg_head3_plus_tail3 greaterOrEqual 0.2135",
                "id": "0.005055814",
                "nodeName": "0.005055814",
                "type": "TreeModel"
              }], "id": "0.014922542", "nodeName": "0.014922542", "type": "TreeModel"
            }, {
              "expression": "cc_usrate_max greaterOrEqual 0.885",
              "id": "0.005055814",
              "nodeName": "0.005055814",
              "type": "TreeModel"
            }], "id": "-0.009599997", "nodeName": "-0.009599997", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "accfd_now_pay lessThan 4453.5703",
                    "id": "-0.029392954",
                    "nodeName": "-0.029392954",
                    "type": "TreeModel"
                  }], "id": "-0.040986538", "nodeName": "-0.040986538", "type": "TreeModel"
                }], "id": "-0.021485656", "nodeName": "-0.021485656", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "cc_mob_max_now lessThan 63.114998",
                  "id": "-0.040986538",
                  "nodeName": "-0.040986538",
                  "type": "TreeModel"
                }], "id": "-0.05444475", "nodeName": "-0.05444475", "type": "TreeModel"
              }, {
                "expression": "unsquare_consume_balance greaterOrEqual 999.5",
                "id": "-0.05444475",
                "nodeName": "-0.05444475",
                "type": "TreeModel"
              }], "id": "-0.07693726", "nodeName": "-0.07693726", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "ln_repay_actual greaterOrEqual 90.5",
                  "id": "0.016070405",
                  "nodeName": "0.016070405",
                  "type": "TreeModel"
                }], "id": "0.038570084", "nodeName": "0.038570084", "type": "TreeModel"
              }, {
                "expression": "ln_repay_actual greaterOrEqual 709.5",
                "id": "0.04108072",
                "nodeName": "0.04108072",
                "type": "TreeModel"
              }], "id": "0.07916207", "nodeName": "0.07916207", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "consumerloan_times_avg lessThan 8.5",
                "id": "-0.021485656",
                "nodeName": "-0.021485656",
                "type": "TreeModel"
              }], "id": "-0.0028559633", "nodeName": "-0.0028559633", "type": "TreeModel"
            }, {
              "expression": "cc_usrate_avg lessThan 0.485",
              "id": "-0.0028559633",
              "nodeName": "-0.0028559633",
              "type": "TreeModel"
            }], "id": "0.014864537", "nodeName": "0.014864537", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "v2_p_user_regday greaterOrEqual 603.5",
                    "id": "0.023602795",
                    "nodeName": "0.023602795",
                    "type": "TreeModel"
                  }], "id": "0.038349308", "nodeName": "0.038349308", "type": "TreeModel"
                }], "id": "0.053095818", "nodeName": "0.053095818", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "acc_avg_account_reg_days greaterOrEqual 621.5",
                  "id": "0.05616419",
                  "nodeName": "0.05616419",
                  "type": "TreeModel"
                }], "id": "0.069172576", "nodeName": "0.069172576", "type": "TreeModel"
              }], "id": "0.14874873", "nodeName": "0.14874873", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "ln_mob_internet_min_v3 lessThan 6.955",
                  "id": "0.008480666",
                  "nodeName": "0.008480666",
                  "type": "TreeModel"
                }], "id": "0.01604173", "nodeName": "0.01604173", "type": "TreeModel"
              }, {
                "expression": "ln_amt_l6th_creditloan greaterOrEqual -130.5",
                "id": "0.023602795",
                "nodeName": "0.023602795",
                "type": "TreeModel"
              }], "id": "0.01604173", "nodeName": "0.01604173", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d greaterOrEqual 0.12035",
                "id": "-0.007899843",
                "nodeName": "-0.007899843",
                "type": "TreeModel"
              }], "id": "-0.025458846", "nodeName": "-0.025458846", "type": "TreeModel"
            }, {
              "expression": "v_credit_query_cnt_2y greaterOrEqual 3.5",
              "id": "0.008480666",
              "nodeName": "0.008480666",
              "type": "TreeModel"
            }], "id": "-0.007899843", "nodeName": "-0.007899843", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "ln_amt_l6th_creditloan greaterOrEqual -2178.5",
                    "id": "-0.010524904",
                    "nodeName": "-0.010524904",
                    "type": "TreeModel"
                  }], "id": "-0.017368887", "nodeName": "-0.017368887", "type": "TreeModel"
                }], "id": "-0.024212867", "nodeName": "-0.024212867", "type": "TreeModel"
              }, {
                "expression": "app_score_v2_a_bad_abs_top_avg lessThan 0.2155",
                "id": "-0.024212867",
                "nodeName": "-0.024212867",
                "type": "TreeModel"
              }, {
                "expression": "cc_usrate_avg lessThan 0.315",
                "id": "-0.073261835",
                "nodeName": "-0.073261835",
                "type": "TreeModel"
              }], "id": "-0.039351672", "nodeName": "-0.039351672", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "ln_ever_amt_max greaterOrEqual 146740.0",
                  "id": "0.012995267",
                  "nodeName": "0.012995267",
                  "type": "TreeModel"
                }], "id": "0.035035662", "nodeName": "0.035035662", "type": "TreeModel"
              }, {
                "expression": "ln_ever_amt_max greaterOrEqual 111116.5",
                "id": "0.05568229",
                "nodeName": "0.05568229",
                "type": "TreeModel"
              }], "id": "0.12419686", "nodeName": "0.12419686", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "unsquare_consume_balance lessThan 11427.5",
                "id": "-0.010524904",
                "nodeName": "-0.010524904",
                "type": "TreeModel"
              }], "id": "-0.0016488296", "nodeName": "-0.0016488296", "type": "TreeModel"
            }, {
              "expression": "ln_mob_internet_min_v3 lessThan 8.045",
              "id": "-0.0016488296",
              "nodeName": "-0.0016488296",
              "type": "TreeModel"
            }], "id": "0.012995267", "nodeName": "0.012995267", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "wm_add_r_user_wm_add_xiuxianyule_o_total lessThan 0.05705",
                    "id": "0.0048477883",
                    "nodeName": "0.0048477883",
                    "type": "TreeModel"
                  }], "id": "0.01862794", "nodeName": "0.01862794", "type": "TreeModel"
                }, {
                  "expression": "ln_amt_l6th_creditloan greaterOrEqual -16.5",
                  "id": "0.030755568",
                  "nodeName": "0.030755568",
                  "type": "TreeModel"
                }], "id": "0.01862794", "nodeName": "0.01862794", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "v_all_query_cnt_2y greaterOrEqual 17.5",
                  "id": "0.05530759",
                  "nodeName": "0.05530759",
                  "type": "TreeModel"
                }], "id": "0.030755568", "nodeName": "0.030755568", "type": "TreeModel"
              }], "id": "0.086106636", "nodeName": "0.086106636", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "unsquare_consume_balance lessThan 1926.5",
                  "id": "-0.03636954",
                  "nodeName": "-0.03636954",
                  "type": "TreeModel"
                }], "id": "-0.017393064", "nodeName": "-0.017393064", "type": "TreeModel"
              }, {
                "expression": "r_credit_succ_after_query_cnt_o_credit_query_cnt_2y greaterOrEqual 0.70185184",
                "id": "-0.017393064",
                "nodeName": "-0.017393064",
                "type": "TreeModel"
              }], "id": "-0.00756218", "nodeName": "-0.00756218", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "ln_amt_l6th_creditloan greaterOrEqual 17043.5",
                "id": "-0.0013571959",
                "nodeName": "-0.0013571959",
                "type": "TreeModel"
              }], "id": "-0.00756218", "nodeName": "-0.00756218", "type": "TreeModel"
            }, {
              "expression": "order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d greaterOrEqual 0.01185",
              "id": "0.0048477883",
              "nodeName": "0.0048477883",
              "type": "TreeModel"
            }], "id": "-0.0013571959", "nodeName": "-0.0013571959", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "expression": "add_robust_score_a lessThan 1.9965999",
                  "id": "0.1098847",
                  "nodeName": "0.1098847",
                  "type": "TreeModel"
                }, {
                  "expression": "v2_r_user_paycftsuccamt_o_payamt_360d lessThan 0.29068458",
                  "id": "0.051067717",
                  "nodeName": "0.051067717",
                  "type": "TreeModel"
                }], "id": "0.0705108", "nodeName": "0.0705108", "type": "TreeModel"
              }, {
                "expression": "ln_amt_l6th_creditloan greaterOrEqual 2184.0",
                "id": "0.0467926",
                "nodeName": "0.0467926",
                "type": "TreeModel"
              }], "id": "0.025993293", "nodeName": "0.025993293", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "idnbankallm3applyorgnumt lessThan 7.5",
                  "id": "0.006439328",
                  "nodeName": "0.006439328",
                  "type": "TreeModel"
                }], "id": "0.016216312", "nodeName": "0.016216312", "type": "TreeModel"
              }, {
                "expression": "app_score_v2_cc_limit_avg_head3_plus_tail3 greaterOrEqual 0.7185",
                "id": "0.016216312",
                "nodeName": "0.016216312",
                "type": "TreeModel"
              }], "id": "0.025993293", "nodeName": "0.025993293", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "acc_avg_account_reg_days greaterOrEqual 811.5",
                "id": "-0.002613191",
                "nodeName": "-0.002613191",
                "type": "TreeModel"
              }], "id": "0.006439328", "nodeName": "0.006439328", "type": "TreeModel"
            }, {
              "expression": "v2_s_max_user_pay_meishi_succ_amt_360d greaterOrEqual 9850.5",
              "id": "-0.021019178",
              "nodeName": "-0.021019178",
              "type": "TreeModel"
            }], "id": "-0.002613191", "nodeName": "-0.002613191", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "expression": "ln_amt_l6th_creditloan greaterOrEqual 25137.5",
                "id": "0.088460624",
                "nodeName": "0.088460624",
                "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "ln_limit_normal_sum greaterOrEqual 5441.5",
                  "id": "0.031567626",
                  "nodeName": "0.031567626",
                  "type": "TreeModel"
                }], "id": "0.058620002", "nodeName": "0.058620002", "type": "TreeModel"
              }, {
                "expression": "v_credit_query_cnt_2y greaterOrEqual 7.5",
                "id": "0.031567626",
                "nodeName": "0.031567626",
                "type": "TreeModel"
              }], "id": "0.01636989", "nodeName": "0.01636989", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "consumerloan_times_avg greaterOrEqual 14.5",
                "id": "-0.02148323",
                "nodeName": "-0.02148323",
                "type": "TreeModel"
              }, {
                "expression": "v2_r_user_paycftsuccamt_o_payamt_360d greaterOrEqual 0.35176146",
                "id": "-0.035497468",
                "nodeName": "-0.035497468",
                "type": "TreeModel"
              }], "id": "-0.057262026", "nodeName": "-0.057262026", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "creditloan_times_avg greaterOrEqual 11.5",
                "id": "0.0035911766",
                "nodeName": "0.0035911766",
                "type": "TreeModel"
              }], "id": "-0.012725757", "nodeName": "-0.012725757", "type": "TreeModel"
            }, {
              "expression": "ln_repay_actual greaterOrEqual 3237.5",
              "id": "0.0035911766",
              "nodeName": "0.0035911766",
              "type": "TreeModel"
            }], "id": "0.01636989", "nodeName": "0.01636989", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "v2_r_user_paycftsuccamt_o_payamt_360d greaterOrEqual 0.37104928",
                    "id": "-0.044099115",
                    "nodeName": "-0.044099115",
                    "type": "TreeModel"
                  }], "id": "-0.06636504", "nodeName": "-0.06636504", "type": "TreeModel"
                }, {
                  "expression": "order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d greaterOrEqual 0.00995",
                  "id": "-0.02958095",
                  "nodeName": "-0.02958095",
                  "type": "TreeModel"
                }], "id": "-0.044099115", "nodeName": "-0.044099115", "type": "TreeModel"
              }, {
                "expression": "ln_limit_normal_sum lessThan 445142.5",
                "id": "-0.015913596",
                "nodeName": "-0.015913596",
                "type": "TreeModel"
              }], "id": "-0.02958095", "nodeName": "-0.02958095", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "add_robust_score_a greaterOrEqual 2.00265",
                  "id": "0.0070684273",
                  "nodeName": "0.0070684273",
                  "type": "TreeModel"
                }], "id": "0.030243242", "nodeName": "0.030243242", "type": "TreeModel"
              }, {
                "expression": "ln_repay_actual lessThan 572.0",
                "id": "0.18518178",
                "nodeName": "0.18518178",
                "type": "TreeModel"
              }], "id": "0.06215317", "nodeName": "0.06215317", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "app_score_v2_a_bad_abs_top_avg lessThan 0.13749999",
                "id": "-0.00679028",
                "nodeName": "-0.00679028",
                "type": "TreeModel"
              }], "id": "-0.015913596", "nodeName": "-0.015913596", "type": "TreeModel"
            }, {
              "expression": "app_score_v2_cc_limit_avg_head3_plus_tail3 greaterOrEqual 0.56850004",
              "id": "-0.00679028",
              "nodeName": "-0.00679028",
              "type": "TreeModel"
            }], "id": "0.0068838466", "nodeName": "0.0068838466", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "v_all_query_cnt_2y greaterOrEqual 8.5",
                    "id": "-0.03337839",
                    "nodeName": "-0.03337839",
                    "type": "TreeModel"
                  }], "id": "-0.061720245", "nodeName": "-0.061720245", "type": "TreeModel"
                }], "id": "-0.082720265", "nodeName": "-0.082720265", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "sp_s_sum_user_sp_alipay_pay_succ_amt_6m lessThan 380.25",
                  "id": "-0.014999264",
                  "nodeName": "-0.014999264",
                  "type": "TreeModel"
                }], "id": "-0.024188826", "nodeName": "-0.024188826", "type": "TreeModel"
              }, {
                "expression": "ln_mob_internet_min_v3 lessThan 17.695",
                "id": "-0.03337839",
                "nodeName": "-0.03337839",
                "type": "TreeModel"
              }], "id": "-0.024188826", "nodeName": "-0.024188826", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "cc_mob_max_now lessThan 41.695",
                  "id": "0.026396485",
                  "nodeName": "0.026396485",
                  "type": "TreeModel"
                }], "id": "0.008144911", "nodeName": "0.008144911", "type": "TreeModel"
              }, {
                "expression": "ln_mob_internet_min_v3 greaterOrEqual 15.174999",
                "id": "0.1687158",
                "nodeName": "0.1687158",
                "type": "TreeModel"
              }], "id": "0.04295583", "nodeName": "0.04295583", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "consumerloan_times_avg lessThan 7.5",
                "id": "-3.064908E-4",
                "nodeName": "-3.064908E-4",
                "type": "TreeModel"
              }], "id": "0.008144911", "nodeName": "0.008144911", "type": "TreeModel"
            }, {
              "expression": "ln_repay_actual greaterOrEqual 657.5",
              "id": "-0.014999264",
              "nodeName": "-0.014999264",
              "type": "TreeModel"
            }], "id": "-6.306752E-4", "nodeName": "-6.306752E-4", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "idcellnbankloanm3applyorgnumt greaterOrEqual 0.5",
                    "id": "0.0320696",
                    "nodeName": "0.0320696",
                    "type": "TreeModel"
                  }], "id": "0.016972175", "nodeName": "0.016972175", "type": "TreeModel"
                }, {
                  "expression": "acc_avg_account_reg_days greaterOrEqual 686.5",
                  "id": "0.0320696",
                  "nodeName": "0.0320696",
                  "type": "TreeModel"
                }], "id": "0.06025565", "nodeName": "0.06025565", "type": "TreeModel"
              }, {
                "expression": "ln_limit_normal_sum greaterOrEqual 2899.5",
                "id": "0.06025565",
                "nodeName": "0.06025565",
                "type": "TreeModel"
              }], "id": "0.16212282", "nodeName": "0.16212282", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "idcellnbankallm3applyorgnumt greaterOrEqual 0.5",
                  "id": "-0.0290404",
                  "nodeName": "-0.0290404",
                  "type": "TreeModel"
                }], "id": "-0.06329274", "nodeName": "-0.06329274", "type": "TreeModel"
              }, {
                "expression": "ln_mob_internet_min_v3 lessThan 2.145",
                "id": "-0.02470789",
                "nodeName": "-0.02470789",
                "type": "TreeModel"
              }], "id": "-0.013842154", "nodeName": "-0.013842154", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "consumerloan_times_avg lessThan 7.5",
                "id": "0.006762316",
                "nodeName": "0.006762316",
                "type": "TreeModel"
              }], "id": "0.016972175", "nodeName": "0.016972175", "type": "TreeModel"
            }, {
              "expression": "v_all_query_cnt_2y greaterOrEqual 13.5",
              "id": "0.006762316",
              "nodeName": "0.006762316",
              "type": "TreeModel"
            }], "id": "-0.010671387", "nodeName": "-0.010671387", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "idcellnbankallm3applyorgnumt lessThan 5.5",
                    "id": "0.005040046",
                    "nodeName": "0.005040046",
                    "type": "TreeModel"
                  }], "id": "0.014049665", "nodeName": "0.014049665", "type": "TreeModel"
                }, {
                  "expression": "accfd_now_pay greaterOrEqual 1803.125",
                  "id": "0.014049665",
                  "nodeName": "0.014049665",
                  "type": "TreeModel"
                }], "id": "0.023059284", "nodeName": "0.023059284", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "v2_r_user_paycftsuccamt_o_payamt_180d greaterOrEqual 0.3705283",
                  "id": "0.13787991",
                  "nodeName": "0.13787991",
                  "type": "TreeModel"
                }], "id": "0.051750936", "nodeName": "0.051750936", "type": "TreeModel"
              }, {
                "expression": "acc_avg_account_reg_days lessThan 517.5",
                "id": "0.051750936",
                "nodeName": "0.051750936",
                "type": "TreeModel"
              }], "id": "0.023059284", "nodeName": "0.023059284", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "ln_repay_actual lessThan 12324.0",
                  "id": "-0.029922973",
                  "nodeName": "-0.029922973",
                  "type": "TreeModel"
                }], "id": "-0.058239784", "nodeName": "-0.058239784", "type": "TreeModel"
              }], "id": "0.005040046", "nodeName": "0.005040046", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "acc_avg_account_reg_days greaterOrEqual 735.5",
                "id": "-0.032782268",
                "nodeName": "-0.032782268",
                "type": "TreeModel"
              }], "id": "-0.008762566", "nodeName": "-0.008762566", "type": "TreeModel"
            }, {
              "expression": "cc_usrate_max lessThan 0.865",
              "id": "-0.007730833",
              "nodeName": "-0.007730833",
              "type": "TreeModel"
            }], "id": "0.005040046", "nodeName": "0.005040046", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "v2_s_max_user_pay_meishi_succ_amt_360d lessThan 8800.5",
                    "id": "0.047910888",
                    "nodeName": "0.047910888",
                    "type": "TreeModel"
                  }], "id": "0.021510074", "nodeName": "0.021510074", "type": "TreeModel"
                }, {
                  "expression": "add_robust_score_a lessThan 2.49075",
                  "id": "0.10167352",
                  "nodeName": "0.10167352",
                  "type": "TreeModel"
                }], "id": "0.058619503", "nodeName": "0.058619503", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "idnbankotherloworglowconcernt lessThan 0.5",
                  "id": "0.0029512015",
                  "nodeName": "0.0029512015",
                  "type": "TreeModel"
                }], "id": "0.011356903", "nodeName": "0.011356903", "type": "TreeModel"
              }, {
                "expression": "sp_s_sum_user_sp_alipay_pay_succ_amt_6m greaterOrEqual 20.05",
                "id": "0.011356903",
                "nodeName": "0.011356903",
                "type": "TreeModel"
              }], "id": "0.021510074", "nodeName": "0.021510074", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "cc_usrate_max greaterOrEqual 1.005",
                  "id": "-0.033225365",
                  "nodeName": "-0.033225365",
                  "type": "TreeModel"
                }], "id": "-0.055610873", "nodeName": "-0.055610873", "type": "TreeModel"
              }, {
                "expression": "ln_repay_actual lessThan 5564.5",
                "id": "-0.019952022",
                "nodeName": "-0.019952022",
                "type": "TreeModel"
              }], "id": "-0.033225365", "nodeName": "-0.033225365", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "idcellnbankalld7applyorgnumt lessThan 0.5",
                "id": "-0.019952022",
                "nodeName": "-0.019952022",
                "type": "TreeModel"
              }], "id": "-0.0069210744", "nodeName": "-0.0069210744", "type": "TreeModel"
            }, {
              "expression": "add_robust_score_a greaterOrEqual 3.3906498",
              "id": "-0.0069210744",
              "nodeName": "-0.0069210744",
              "type": "TreeModel"
            }], "id": "0.0029512015", "nodeName": "0.0029512015", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "v2_r_user_paycftsuccamt_o_payamt_180d greaterOrEqual 0.084439725",
                    "id": "-0.020020595",
                    "nodeName": "-0.020020595",
                    "type": "TreeModel"
                  }], "id": "-0.03432316", "nodeName": "-0.03432316", "type": "TreeModel"
                }, {
                  "expression": "accfd_now_pay lessThan 6402.085",
                  "id": "-0.04104646",
                  "nodeName": "-0.04104646",
                  "type": "TreeModel"
                }], "id": "-0.07319045", "nodeName": "-0.07319045", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "cc_mob_max_now greaterOrEqual 53.885002",
                  "id": "-8.0748973E-4",
                  "nodeName": "-8.0748973E-4",
                  "type": "TreeModel"
                }], "id": "0.006001737", "nodeName": "0.006001737", "type": "TreeModel"
              }, {
                "expression": "idcellnbankp2pm3applyorgnumt greaterOrEqual 0.5",
                "id": "-8.0748973E-4",
                "nodeName": "-8.0748973E-4",
                "type": "TreeModel"
              }], "id": "-0.015628736", "nodeName": "-0.015628736", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "ln_limit_normal_sum greaterOrEqual 4434.5",
                  "id": "0.052094884",
                  "nodeName": "0.052094884",
                  "type": "TreeModel"
                }], "id": "0.110764615", "nodeName": "0.110764615", "type": "TreeModel"
              }, {
                "expression": "unsquare_consume_balance_max lessThan 2681.5",
                "id": "0.028735641",
                "nodeName": "0.028735641",
                "type": "TreeModel"
              }], "id": "0.048075248", "nodeName": "0.048075248", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "creditloan_times_avg lessThan 11.5",
                "id": "0.01736869",
                "nodeName": "0.01736869",
                "type": "TreeModel"
              }], "id": "0.028735641", "nodeName": "0.028735641", "type": "TreeModel"
            }, {
              "expression": "wm_add_r_user_wm_add_xiuxianyule_o_total greaterOrEqual 0.00835",
              "id": "0.01736869",
              "nodeName": "0.01736869",
              "type": "TreeModel"
            }], "id": "0.006001737", "nodeName": "0.006001737", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d greaterOrEqual 3.5",
                    "id": "0.08625567",
                    "nodeName": "0.08625567",
                    "type": "TreeModel"
                  }], "id": "0.043051463", "nodeName": "0.043051463", "type": "TreeModel"
                }], "id": "0.028943496", "nodeName": "0.028943496", "type": "TreeModel"
              }, {
                "expression": "v2_r_user_paycftsuccamt_o_payamt_180d lessThan 0.4878544",
                "id": "0.015714437",
                "nodeName": "0.015714437",
                "type": "TreeModel"
              }], "id": "0.028943496", "nodeName": "0.028943496", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "v2_s_max_user_pay_meishi_succ_amt_360d lessThan 20907.5",
                  "id": "-0.015376632",
                  "nodeName": "-0.015376632",
                  "type": "TreeModel"
                }], "id": "-0.026779769", "nodeName": "-0.026779769", "type": "TreeModel"
              }, {
                "expression": "r_credit_succ_after_query_cnt_o_credit_query_cnt_2y lessThan 0.89181286",
                "id": "-0.032200046",
                "nodeName": "-0.032200046",
                "type": "TreeModel"
              }], "id": "-0.06208791", "nodeName": "-0.06208791", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "cc_mob_max_now greaterOrEqual 41.5",
                "id": "0.004590287",
                "nodeName": "0.004590287",
                "type": "TreeModel"
              }], "id": "0.015714437", "nodeName": "0.015714437", "type": "TreeModel"
            }, {
              "expression": "unsquare_consume_balance lessThan 6739.5",
              "id": "-0.010598696",
              "nodeName": "-0.010598696",
              "type": "TreeModel"
            }], "id": "0.004590287", "nodeName": "0.004590287", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "ln_mob_internet_min_v3 greaterOrEqual 1.405",
                    "id": "-0.02695139",
                    "nodeName": "-0.02695139",
                    "type": "TreeModel"
                  }], "id": "-0.038856518", "nodeName": "-0.038856518", "type": "TreeModel"
                }, {
                  "expression": "cc_usrate_max greaterOrEqual 0.945",
                  "id": "-0.038856518",
                  "nodeName": "-0.038856518",
                  "type": "TreeModel"
                }], "id": "-0.06536458", "nodeName": "-0.06536458", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "ln_limit_normal_sum lessThan 329749.5",
                  "id": "-0.011266973",
                  "nodeName": "-0.011266973",
                  "type": "TreeModel"
                }], "id": "-0.019109182", "nodeName": "-0.019109182", "type": "TreeModel"
              }, {
                "expression": "consumerloan_times_avg greaterOrEqual 11.5",
                "id": "-0.019109182",
                "nodeName": "-0.019109182",
                "type": "TreeModel"
              }], "id": "-0.02695139", "nodeName": "-0.02695139", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "acc_avg_account_reg_days greaterOrEqual 620.5",
                  "id": "0.03811422",
                  "nodeName": "0.03811422",
                  "type": "TreeModel"
                }], "id": "0.08185037", "nodeName": "0.08185037", "type": "TreeModel"
              }, {
                "expression": "v2_p_user_regday greaterOrEqual 327.5",
                "id": "0.0113803465",
                "nodeName": "0.0113803465",
                "type": "TreeModel"
              }], "id": "0.03811422", "nodeName": "0.03811422", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "cc_mob_max_now greaterOrEqual 66.115",
                "id": "4.406725E-4",
                "nodeName": "4.406725E-4",
                "type": "TreeModel"
              }], "id": "0.008780892", "nodeName": "0.008780892", "type": "TreeModel"
            }, {
              "expression": "v2_s_max_user_pay_meishi_succ_amt_360d greaterOrEqual 9877.5",
              "id": "-0.011266973",
              "nodeName": "-0.011266973",
              "type": "TreeModel"
            }], "id": "4.406725E-4", "nodeName": "4.406725E-4", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "expression": "v2_r_user_paycftsuccamt_o_payamt_360d greaterOrEqual 0.44387975",
                  "id": "-0.019044215",
                  "nodeName": "-0.019044215",
                  "type": "TreeModel"
                }, {
                  "expression": "order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d greaterOrEqual 2.5",
                  "id": "-0.032103423",
                  "nodeName": "-0.032103423",
                  "type": "TreeModel"
                }], "id": "-0.05805734", "nodeName": "-0.05805734", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d greaterOrEqual 0.01075",
                  "id": "-0.0010827563",
                  "nodeName": "-0.0010827563",
                  "type": "TreeModel"
                }], "id": "-0.019044215", "nodeName": "-0.019044215", "type": "TreeModel"
              }, {
                "expression": "ln_amt_l6th_creditloan greaterOrEqual -99.5",
                "id": "0.005418151",
                "nodeName": "0.005418151",
                "type": "TreeModel"
              }], "id": "-0.0010827563", "nodeName": "-0.0010827563", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "ln_amt_l6th_creditloan greaterOrEqual 20210.5",
                  "id": "0.01045358",
                  "nodeName": "0.01045358",
                  "type": "TreeModel"
                }], "id": "0.005418151", "nodeName": "0.005418151", "type": "TreeModel"
              }, {
                "expression": "consumerloan_times_avg lessThan 6.5",
                "id": "0.01045358",
                "nodeName": "0.01045358",
                "type": "TreeModel"
              }], "id": "0.015489008", "nodeName": "0.015489008", "type": "TreeModel"
            }, {
              "expression": "cc_usrate_100p_cnt greaterOrEqual 1.5",
              "id": "0.072471224",
              "nodeName": "0.072471224",
              "type": "TreeModel"
            }, {
              "expression": "r_credit_succ_after_query_cnt_o_credit_query_cnt_2y lessThan 0.26794875",
              "id": "0.041954227",
              "nodeName": "0.041954227",
              "type": "TreeModel"
            }], "id": "0.015489008", "nodeName": "0.015489008", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "expression": "order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d greaterOrEqual 0.053999998",
                  "id": "-0.043075282",
                  "nodeName": "-0.043075282",
                  "type": "TreeModel"
                }], "id": "-0.07597464", "nodeName": "-0.07597464", "type": "TreeModel"
              }, {
                "expression": "unsquare_consume_balance_max greaterOrEqual 2624.5",
                "id": "-0.016221758",
                "nodeName": "-0.016221758",
                "type": "TreeModel"
              }, {
                "expression": "ln_mob_internet_min_v3 lessThan 16.855",
                "id": "-0.043075282",
                "nodeName": "-0.043075282",
                "type": "TreeModel"
              }], "id": "-0.026126793", "nodeName": "-0.026126793", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d greaterOrEqual 0.13232574",
                  "id": "0.017195452",
                  "nodeName": "0.017195452",
                  "type": "TreeModel"
                }], "id": "0.008174174", "nodeName": "0.008174174", "type": "TreeModel"
              }, {
                "expression": "ln_amt_l6th_creditloan greaterOrEqual 10011.0",
                "id": "0.03601645",
                "nodeName": "0.03601645",
                "type": "TreeModel"
              }], "id": "0.017195452", "nodeName": "0.017195452", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "ln_amt_l6th_creditloan greaterOrEqual 19742.5",
                "id": "-0.0042167455",
                "nodeName": "-0.0042167455",
                "type": "TreeModel"
              }], "id": "-0.016221758", "nodeName": "-0.016221758", "type": "TreeModel"
            }, {
              "expression": "sp_s_sum_user_sp_alipay_pay_succ_amt_6m greaterOrEqual 3.975",
              "id": "-0.0042167455",
              "nodeName": "-0.0042167455",
              "type": "TreeModel"
            }], "id": "0.008174174", "nodeName": "0.008174174", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "v2_r_user_paycftsuccamt_o_payamt_180d greaterOrEqual 0.113137335",
                    "id": "-0.036509044",
                    "nodeName": "-0.036509044",
                    "type": "TreeModel"
                  }], "id": "-0.056873422", "nodeName": "-0.056873422", "type": "TreeModel"
                }], "id": "-0.07468021", "nodeName": "-0.07468021", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "ln_limit_normal_sum lessThan 445358.0",
                  "id": "-0.012825284",
                  "nodeName": "-0.012825284",
                  "type": "TreeModel"
                }], "id": "-0.024684625", "nodeName": "-0.024684625", "type": "TreeModel"
              }, {
                "expression": "idnbankallm3applyorgnumt lessThan 3.5",
                "id": "-0.036509044",
                "nodeName": "-0.036509044",
                "type": "TreeModel"
              }], "id": "-0.024684625", "nodeName": "-0.024684625", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "ln_limit_normal_sum lessThan 87702.0",
                  "id": "0.04045389",
                  "nodeName": "0.04045389",
                  "type": "TreeModel"
                }], "id": "0.018492697", "nodeName": "0.018492697", "type": "TreeModel"
              }, {
                "expression": "cc_mob_max_now lessThan 77.335",
                "id": "0.07559129",
                "nodeName": "0.07559129",
                "type": "TreeModel"
              }], "id": "0.04045389", "nodeName": "0.04045389", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "cc_mob_max_now greaterOrEqual 36.695",
                "id": "0.007996931",
                "nodeName": "0.007996931",
                "type": "TreeModel"
              }], "id": "0.018492697", "nodeName": "0.018492697", "type": "TreeModel"
            }, {
              "expression": "add_robust_score_a_b_c greaterOrEqual 4.4464",
              "id": "-0.008781141",
              "nodeName": "-0.008781141",
              "type": "TreeModel"
            }], "id": "0.0069991867", "nodeName": "0.0069991867", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "v2_p_user_regday lessThan 1387.5",
                    "id": "0.059114687",
                    "nodeName": "0.059114687",
                    "type": "TreeModel"
                  }], "id": "0.037295997", "nodeName": "0.037295997", "type": "TreeModel"
                }, {
                  "expression": "unsquare_consume_balance greaterOrEqual 5313.5",
                  "id": "0.037295997",
                  "nodeName": "0.037295997",
                  "type": "TreeModel"
                }], "id": "0.024919577", "nodeName": "0.024919577", "type": "TreeModel"
              }, {
                "expression": "creditloan_times_avg greaterOrEqual 13.5",
                "id": "0.019774606",
                "nodeName": "0.019774606",
                "type": "TreeModel"
              }], "id": "0.012362965", "nodeName": "0.012362965", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "order_all_order_hour_seg_eq_late_night_size_ratio_360d greaterOrEqual 0.053549998",
                  "id": "-0.028761603",
                  "nodeName": "-0.028761603",
                  "type": "TreeModel"
                }], "id": "-0.05276965", "nodeName": "-0.05276965", "type": "TreeModel"
              }], "id": "-0.01731612", "nodeName": "-0.01731612", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "unsquare_consume_times_avg lessThan 14.5",
                "id": "0.0044033416",
                "nodeName": "0.0044033416",
                "type": "TreeModel"
              }], "id": "0.012362965", "nodeName": "0.012362965", "type": "TreeModel"
            }, {
              "expression": "ln_repay_actual greaterOrEqual 665.5",
              "id": "-0.01284308",
              "nodeName": "-0.01284308",
              "type": "TreeModel"
            }], "id": "0.0039125686", "nodeName": "0.0039125686", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "expression": "unsquare_consume_balance_max greaterOrEqual 2755.5",
                  "id": "0.079098575",
                  "nodeName": "0.079098575",
                  "type": "TreeModel"
                }, {
                  "expression": "ln_mob_internet_min_v3 lessThan 11.725",
                  "id": "0.033816725",
                  "nodeName": "0.033816725",
                  "type": "TreeModel"
                }], "id": "0.057313234", "nodeName": "0.057313234", "type": "TreeModel"
              }, {
                "expression": "v2_r_user_paycftsuccamt_o_payamt_360d lessThan 0.19291076",
                "id": "0.017545912",
                "nodeName": "0.017545912",
                "type": "TreeModel"
              }], "id": "0.033816725", "nodeName": "0.033816725", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "add_robust_score_a_b_c greaterOrEqual 6.9708996",
                  "id": "0.011062596",
                  "nodeName": "0.011062596",
                  "type": "TreeModel"
                }], "id": "0.017545912", "nodeName": "0.017545912", "type": "TreeModel"
              }, {
                "expression": "app_score_v2_a_bad_abs_top_avg lessThan 0.1165",
                "id": "0.011062596",
                "nodeName": "0.011062596",
                "type": "TreeModel"
              }], "id": "0.0045792805", "nodeName": "0.0045792805", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "v2_s_max_user_pay_meishi_succ_amt_360d lessThan 36373.5",
                "id": "-0.03185074",
                "nodeName": "-0.03185074",
                "type": "TreeModel"
              }], "id": "-0.07853156", "nodeName": "-0.07853156", "type": "TreeModel"
            }, {
              "expression": "cc_usrate_max lessThan 0.865",
              "id": "-0.014634654",
              "nodeName": "-0.014634654",
              "type": "TreeModel"
            }], "id": "0.0016019063", "nodeName": "0.0016019063", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "expression": "ln_amt_l6th_creditloan greaterOrEqual 20074.0",
                  "id": "0.039588675",
                  "nodeName": "0.039588675",
                  "type": "TreeModel"
                }, {
                  "expression": "cc_mob_max_now lessThan 24.630001",
                  "id": "0.027635034",
                  "nodeName": "0.027635034",
                  "type": "TreeModel"
                }], "id": "0.015681395", "nodeName": "0.015681395", "type": "TreeModel"
              }, {
                "expression": "ln_mob_internet_min_v3 lessThan 5.3050003",
                "id": "0.039588675",
                "nodeName": "0.039588675",
                "type": "TreeModel"
              }], "id": "0.08797884", "nodeName": "0.08797884", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "v2_s_max_user_pay_meishi_succ_amt_360d lessThan 18820.0",
                  "id": "-0.017207827",
                  "nodeName": "-0.017207827",
                  "type": "TreeModel"
                }], "id": "-0.025044234", "nodeName": "-0.025044234", "type": "TreeModel"
              }, {
                "expression": "v2_r_user_paycftsuccamt_o_payamt_360d greaterOrEqual 0.13207102",
                "id": "-0.029754864",
                "nodeName": "-0.029754864",
                "type": "TreeModel"
              }], "id": "-0.059631668", "nodeName": "-0.059631668", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "cc_mob_max_now greaterOrEqual 90.405",
                "id": "0.006706607",
                "nodeName": "0.006706607",
                "type": "TreeModel"
              }], "id": "0.015681395", "nodeName": "0.015681395", "type": "TreeModel"
            }, {
              "expression": "ln_mob_internet_min_v3 lessThan 3.3049998",
              "id": "-0.010416468",
              "nodeName": "-0.010416468",
              "type": "TreeModel"
            }], "id": "0.0041167387", "nodeName": "0.0041167387", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "expression": "creditloan_times_avg lessThan 7.5",
                  "id": "0.022243394",
                  "nodeName": "0.022243394",
                  "type": "TreeModel"
                }, {
                  "expression": "v2_r_user_paycftsuccamt_o_payamt_360d greaterOrEqual 0.20010376",
                  "id": "0.05677414",
                  "nodeName": "0.05677414",
                  "type": "TreeModel"
                }], "id": "0.033923794", "nodeName": "0.033923794", "type": "TreeModel"
              }], "id": "0.082379855", "nodeName": "0.082379855", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "ln_amt_l6th_creditloan greaterOrEqual -117.0",
                  "id": "0.022243394",
                  "nodeName": "0.022243394",
                  "type": "TreeModel"
                }], "id": "0.015898388", "nodeName": "0.015898388", "type": "TreeModel"
              }, {
                "expression": "v2_r_user_paycftsuccamt_o_payamt_360d greaterOrEqual 0.40070862",
                "id": "0.015898388",
                "nodeName": "0.015898388",
                "type": "TreeModel"
              }], "id": "0.00955338", "nodeName": "0.00955338", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "cc_mob_max_now greaterOrEqual 54.565002",
                "id": "-2.9689632E-4",
                "nodeName": "-2.9689632E-4",
                "type": "TreeModel"
              }], "id": "0.00955338", "nodeName": "0.00955338", "type": "TreeModel"
            }, {
              "expression": "ln_amt_l6th_creditloan greaterOrEqual 8500.5",
              "id": "-2.9689632E-4",
              "nodeName": "-2.9689632E-4",
              "type": "TreeModel"
            }], "id": "-0.012155516", "nodeName": "-0.012155516", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "expression": "order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d greaterOrEqual 0.12735",
                  "id": "0.06719958",
                  "nodeName": "0.06719958",
                  "type": "TreeModel"
                }, {
                  "expression": "r_credit_succ_after_query_cnt_o_credit_query_cnt_2y greaterOrEqual 0.3397436",
                  "id": "0.023745578",
                  "nodeName": "0.023745578",
                  "type": "TreeModel"
                }], "id": "0.032945666", "nodeName": "0.032945666", "type": "TreeModel"
              }], "id": "0.10465422", "nodeName": "0.10465422", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d greaterOrEqual 0.00555",
                  "id": "-0.0054745236",
                  "nodeName": "-0.0054745236",
                  "type": "TreeModel"
                }], "id": "-0.014499584", "nodeName": "-0.014499584", "type": "TreeModel"
              }, {
                "expression": "v2_v_user_acc_visit_week_cnt_360d lessThan 36.5",
                "id": "-0.014499584",
                "nodeName": "-0.014499584",
                "type": "TreeModel"
              }], "id": "-0.03402757", "nodeName": "-0.03402757", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "r_credit_succ_after_query_cnt_o_credit_query_cnt_2y lessThan 0.43353415",
                "id": "0.023745578",
                "nodeName": "0.023745578",
                "type": "TreeModel"
              }], "id": "0.00623205", "nodeName": "0.00623205", "type": "TreeModel"
            }, {
              "expression": "idcellnbankalld7applyorgnumt greaterOrEqual 0.5",
              "id": "0.00623205",
              "nodeName": "0.00623205",
              "type": "TreeModel"
            }], "id": "-0.0054745236", "nodeName": "-0.0054745236", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "expression": "overduehighestmonthlyofloan greaterOrEqual 102.5",
                "id": "0.09641879",
                "nodeName": "0.09641879",
                "type": "TreeModel"
              }, {
                "expression": "accfd_now_pay lessThan 2585.415",
                "id": "0.058106042",
                "nodeName": "0.058106042",
                "type": "TreeModel"
              }, {
                "expression": "ln_amt_l6th_creditloan greaterOrEqual 14087.0",
                "id": "0.036674786",
                "nodeName": "0.036674786",
                "type": "TreeModel"
              }], "id": "0.012333574", "nodeName": "0.012333574", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "idcellnbankp2pm3applyorgnumt greaterOrEqual 0.5",
                  "id": "0.0049508596",
                  "nodeName": "0.0049508596",
                  "type": "TreeModel"
                }], "id": "-0.00834294", "nodeName": "-0.00834294", "type": "TreeModel"
              }, {
                "expression": "app_score_v2_cc_limit_avg_head3_plus_tail3 greaterOrEqual 0.7245",
                "id": "0.005177266",
                "nodeName": "0.005177266",
                "type": "TreeModel"
              }], "id": "0.012333574", "nodeName": "0.012333574", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "v2_r_user_paycftsuccamt_o_payamt_180d greaterOrEqual 0.21568912",
                "id": "-0.008792738",
                "nodeName": "-0.008792738",
                "type": "TreeModel"
              }], "id": "-0.020569641", "nodeName": "-0.020569641", "type": "TreeModel"
            }, {
              "expression": "ln_ever_amt_max greaterOrEqual 99050.0",
              "id": "-0.057645183",
              "nodeName": "-0.057645183",
              "type": "TreeModel"
            }], "id": "-0.024961172", "nodeName": "-0.024961172", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "order_all_order_hour_seg_eq_late_night_size_ratio_360d lessThan 0.01155",
                    "id": "-0.034281217",
                    "nodeName": "-0.034281217",
                    "type": "TreeModel"
                  }], "id": "-0.016841773", "nodeName": "-0.016841773", "type": "TreeModel"
                }, {
                  "expression": "ln_repay_actual greaterOrEqual 1598.5",
                  "id": "-0.07692962",
                  "nodeName": "-0.07692962",
                  "type": "TreeModel"
                }], "id": "-0.034281217", "nodeName": "-0.034281217", "type": "TreeModel"
              }, {
                "expression": "sp_s_sum_user_sp_alipay_pay_succ_amt_6m lessThan 476.95",
                "id": "-0.0080398",
                "nodeName": "-0.0080398",
                "type": "TreeModel"
              }], "id": "-0.016841773", "nodeName": "-0.016841773", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "cc_mob_max_now greaterOrEqual 2.4650002",
                  "id": "0.03521414",
                  "nodeName": "0.03521414",
                  "type": "TreeModel"
                }], "id": "0.08198853", "nodeName": "0.08198853", "type": "TreeModel"
              }, {
                "expression": "v2_p_user_regweek lessThan 25.5",
                "id": "0.03521414",
                "nodeName": "0.03521414",
                "type": "TreeModel"
              }], "id": "0.011676091", "nodeName": "0.011676091", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "v2_r_user_paycftsuccamt_o_payamt_180d greaterOrEqual 0.41355324",
                "id": "8.6535886E-4",
                "nodeName": "8.6535886E-4",
                "type": "TreeModel"
              }], "id": "-0.0080398", "nodeName": "-0.0080398", "type": "TreeModel"
            }, {
              "expression": "ln_repay_actual greaterOrEqual 5261.5",
              "id": "8.6535886E-4",
              "nodeName": "8.6535886E-4",
              "type": "TreeModel"
            }], "id": "0.007847926", "nodeName": "0.007847926", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "r_credit_succ_after_query_cnt_o_credit_query_cnt_2y lessThan 0.2967968",
                    "id": "0.030080862",
                    "nodeName": "0.030080862",
                    "type": "TreeModel"
                  }], "id": "0.015970059", "nodeName": "0.015970059", "type": "TreeModel"
                }, {
                  "expression": "v2_p_user_regweek greaterOrEqual 76.5",
                  "id": "0.030080862",
                  "nodeName": "0.030080862",
                  "type": "TreeModel"
                }], "id": "0.072419286", "nodeName": "0.072419286", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "overduehighestmonthlyofloan greaterOrEqual 29.5",
                  "id": "0.011028534",
                  "nodeName": "0.011028534",
                  "type": "TreeModel"
                }], "id": "0.006087009", "nodeName": "0.006087009", "type": "TreeModel"
              }, {
                "expression": "v_all_query_cnt_2y greaterOrEqual 4.5",
                "id": "0.015970059",
                "nodeName": "0.015970059",
                "type": "TreeModel"
              }], "id": "0.011028534", "nodeName": "0.011028534", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "cc_usrate_max greaterOrEqual 0.71500003",
                  "id": "-0.025867973",
                  "nodeName": "-0.025867973",
                  "type": "TreeModel"
                }], "id": "-0.057371166", "nodeName": "-0.057371166", "type": "TreeModel"
              }, {
                "expression": "cc_usrate_max greaterOrEqual 0.385",
                "id": "-0.010811678",
                "nodeName": "-0.010811678",
                "type": "TreeModel"
              }], "id": "-0.025372367", "nodeName": "-0.025372367", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "qry_times_self_l1st greaterOrEqual 0.5",
                "id": "0.006087009",
                "nodeName": "0.006087009",
                "type": "TreeModel"
              }], "id": "-0.010811678", "nodeName": "-0.010811678", "type": "TreeModel"
            }, {
              "expression": "ln_amt_l6th_creditloan greaterOrEqual -30.5",
              "id": "0.004856093",
              "nodeName": "0.004856093",
              "type": "TreeModel"
            }], "id": "-0.010811678", "nodeName": "-0.010811678", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "ln_amt_l6th_creditloan greaterOrEqual 149350.0",
                    "id": "0.0123991",
                    "nodeName": "0.0123991",
                    "type": "TreeModel"
                  }], "id": "0.0072537605", "nodeName": "0.0072537605", "type": "TreeModel"
                }], "id": "0.017544439", "nodeName": "0.017544439", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "ln_mob_internet_min_v3 lessThan 2.21",
                  "id": "0.030778773",
                  "nodeName": "0.030778773",
                  "type": "TreeModel"
                }], "id": "0.087951414", "nodeName": "0.087951414", "type": "TreeModel"
              }, {
                "expression": "wm_add_r_user_wm_add_xiuxianyule_o_total greaterOrEqual 0.161",
                "id": "0.07181331",
                "nodeName": "0.07181331",
                "type": "TreeModel"
              }], "id": "0.017544439", "nodeName": "0.017544439", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "consumerloan_times_avg lessThan 8.5",
                  "id": "-0.020659521",
                  "nodeName": "-0.020659521",
                  "type": "TreeModel"
                }], "id": "-0.007901831", "nodeName": "-0.007901831", "type": "TreeModel"
              }, {
                "expression": "v2_s_max_user_pay_meishi_succ_amt_360d greaterOrEqual 16905.0",
                "id": "-0.047582977",
                "nodeName": "-0.047582977",
                "type": "TreeModel"
              }], "id": "-0.022778777", "nodeName": "-0.022778777", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "overduehighestmonthlyofloan greaterOrEqual -1.0E-6",
                "id": "-4.6887458E-4",
                "nodeName": "-4.6887458E-4",
                "type": "TreeModel"
              }], "id": "-0.007901831", "nodeName": "-0.007901831", "type": "TreeModel"
            }, {
              "expression": "cc_usrate_avg lessThan 0.415",
              "id": "-4.6887458E-4",
              "nodeName": "-4.6887458E-4",
              "type": "TreeModel"
            }], "id": "0.0072537605", "nodeName": "0.0072537605", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "cc_usrate_avg greaterOrEqual 0.315",
                    "id": "-0.032975454",
                    "nodeName": "-0.032975454",
                    "type": "TreeModel"
                  }], "id": "-0.063543536", "nodeName": "-0.063543536", "type": "TreeModel"
                }, {
                  "expression": "idcellnbankallm3applyorgnumt lessThan 0.5",
                  "id": "-0.028203897",
                  "nodeName": "-0.028203897",
                  "type": "TreeModel"
                }], "id": "-0.013516327", "nodeName": "-0.013516327", "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "idcellallallm3applyorgnumt lessThan 1.5",
                  "id": "-0.009227322",
                  "nodeName": "-0.009227322",
                  "type": "TreeModel"
                }], "id": "-0.0049383165", "nodeName": "-0.0049383165", "type": "TreeModel"
              }, {
                "expression": "acc_avg_account_reg_days lessThan 728.5",
                "id": "-0.009227322",
                "nodeName": "-0.009227322",
                "type": "TreeModel"
              }], "id": "-0.013516327", "nodeName": "-0.013516327", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "cc_mob_max_now lessThan 26.115",
                  "id": "0.07996951",
                  "nodeName": "0.07996951",
                  "type": "TreeModel"
                }], "id": "0.044838686", "nodeName": "0.044838686", "type": "TreeModel"
              }], "id": "0.02410296", "nodeName": "0.02410296", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "ln_amt_l6th_creditloan greaterOrEqual 10017.5",
                "id": "0.02410296",
                "nodeName": "0.02410296",
                "type": "TreeModel"
              }], "id": "0.0074512498", "nodeName": "0.0074512498", "type": "TreeModel"
            }, {
              "expression": "cc_usrate_100p_cnt greaterOrEqual 0.5",
              "id": "0.0074512498",
              "nodeName": "0.0074512498",
              "type": "TreeModel"
            }], "id": "-0.0042923475", "nodeName": "-0.0042923475", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "expression": "ln_amt_l6th_creditloan greaterOrEqual 8594.0",
                "id": "0.07402093",
                "nodeName": "0.07402093",
                "type": "TreeModel"
              }, {
                "expression": "v_all_query_cnt_2y greaterOrEqual 16.5",
                "id": "0.047451254",
                "nodeName": "0.047451254",
                "type": "TreeModel"
              }, {
                "expression": "ln_ever_amt_max greaterOrEqual 3684.0",
                "id": "0.018149873",
                "nodeName": "0.018149873",
                "type": "TreeModel"
              }], "id": "0.02787668", "nodeName": "0.02787668", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "wm_add_r_user_wm_add_xiuxianyule_o_total greaterOrEqual 0.01445",
                  "id": "0.009992519",
                  "nodeName": "0.009992519",
                  "type": "TreeModel"
                }], "id": "0.0018351653", "nodeName": "0.0018351653", "type": "TreeModel"
              }, {
                "expression": "cc_mob_max_now greaterOrEqual 20.630001",
                "id": "0.009992519",
                "nodeName": "0.009992519",
                "type": "TreeModel"
              }], "id": "0.018149873", "nodeName": "0.018149873", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "cc_mob_max_now lessThan 70.045",
                "id": "0.0018351653",
                "nodeName": "0.0018351653",
                "type": "TreeModel"
              }], "id": "-0.006743497", "nodeName": "-0.006743497", "type": "TreeModel"
            }, {
              "expression": "app_score_v2_a_bad_abs_top_avg greaterOrEqual 0.3605",
              "id": "-0.0676216",
              "nodeName": "-0.0676216",
              "type": "TreeModel"
            }], "id": "-0.013197201", "nodeName": "-0.013197201", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "expression": "accfd_now_pay greaterOrEqual 4453.5703",
                "id": "-0.06300376",
                "nodeName": "-0.06300376",
                "type": "TreeModel"
              }, {
                "children": [{
                  "expression": "ln_amt_l6th_creditloan greaterOrEqual 15894.5",
                  "id": "-0.022002617",
                  "nodeName": "-0.022002617",
                  "type": "TreeModel"
                }], "id": "-0.03796535", "nodeName": "-0.03796535", "type": "TreeModel"
              }, {
                "expression": "v2_v_user_acc_visit_week_cnt_360d greaterOrEqual 48.5",
                "id": "-0.022002617",
                "nodeName": "-0.022002617",
                "type": "TreeModel"
              }], "id": "-0.00610242", "nodeName": "-0.00610242", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "overduehighestmonthlyofloan lessThan 88.5",
                  "id": "0.029471036",
                  "nodeName": "0.029471036",
                  "type": "TreeModel"
                }], "id": "0.08963725", "nodeName": "0.08963725", "type": "TreeModel"
              }, {
                "expression": "qry_times_self_l1st greaterOrEqual 0.5",
                "id": "0.029471036",
                "nodeName": "0.029471036",
                "type": "TreeModel"
              }], "id": "0.00793919", "nodeName": "0.00793919", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "ln_ever_amt_max greaterOrEqual 129101.5",
                "id": "3.8151606E-4",
                "nodeName": "3.8151606E-4",
                "type": "TreeModel"
              }], "id": "0.00607536", "nodeName": "0.00607536", "type": "TreeModel"
            }, {
              "expression": "v2_v_user_acc_visit_week_cnt_360d greaterOrEqual 19.5",
              "id": "-0.00610242",
              "nodeName": "-0.00610242",
              "type": "TreeModel"
            }], "id": "3.8151606E-4", "nodeName": "3.8151606E-4", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "expression": "cc_usrate_max greaterOrEqual 1.005",
                "id": "0.06483731",
                "nodeName": "0.06483731",
                "type": "TreeModel"
              }, {
                "expression": "v2_p_user_regday lessThan 859.5",
                "id": "0.04907102",
                "nodeName": "0.04907102",
                "type": "TreeModel"
              }], "id": "0.021587055", "nodeName": "0.021587055", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "ln_mob_internet_min_v3 lessThan 1.6949999",
                "id": "0.009230526",
                "nodeName": "0.009230526",
                "type": "TreeModel"
              }, {
                "expression": "acc_avg_account_reg_days lessThan 928.5",
                "id": "0.021587055",
                "nodeName": "0.021587055",
                "type": "TreeModel"
              }], "id": "0.015408791", "nodeName": "0.015408791", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "acc_avg_account_reg_days greaterOrEqual 722.5",
                "id": "-0.03366328",
                "nodeName": "-0.03366328",
                "type": "TreeModel"
              }], "id": "-0.009436653", "nodeName": "-0.009436653", "type": "TreeModel"
            }, {
              "expression": "add_robust_score_a greaterOrEqual 3.5222",
              "id": "-0.009436653",
              "nodeName": "-0.009436653",
              "type": "TreeModel"
            }], "id": "0.002778045", "nodeName": "0.002778045", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "expression": "cc_mob_max_now greaterOrEqual 16.630001",
                "id": "0.02493404",
                "nodeName": "0.02493404",
                "type": "TreeModel"
              }], "id": "0.1079713", "nodeName": "0.1079713", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "sp_s_sum_user_sp_alipay_pay_succ_amt_6m lessThan 222.2",
                  "id": "-0.012681525",
                  "nodeName": "-0.012681525",
                  "type": "TreeModel"
                }], "id": "-0.024001868", "nodeName": "-0.024001868", "type": "TreeModel"
              }, {
                "expression": "cc_usrate_max greaterOrEqual 1.035",
                "id": "-0.024001868",
                "nodeName": "-0.024001868",
                "type": "TreeModel"
              }], "id": "-0.045049433", "nodeName": "-0.045049433", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "cc_mob_max_now lessThan 73.755",
                "id": "0.02493404",
                "nodeName": "0.02493404",
                "type": "TreeModel"
              }], "id": "0.012142207", "nodeName": "0.012142207", "type": "TreeModel"
            }, {
              "expression": "app_t2_chuxing_che_youche greaterOrEqual -9.536743E-7",
              "id": "-0.012681525",
              "nodeName": "-0.012681525",
              "type": "TreeModel"
            }], "id": "0.0012854143", "nodeName": "0.0012854143", "type": "TreeModel"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "expression": "creditloan_times_avg lessThan 14.5",
                    "id": "0.014107978",
                    "nodeName": "0.014107978",
                    "type": "TreeModel"
                  }], "id": "0.027321722", "nodeName": "0.027321722", "type": "TreeModel"
                }, {
                  "expression": "creditloan_times_avg greaterOrEqual 7.5",
                  "id": "0.057494868",
                  "nodeName": "0.057494868",
                  "type": "TreeModel"
                }], "id": "0.027321722", "nodeName": "0.027321722", "type": "TreeModel"
              }, {
                "expression": "unsquare_consume_balance_max lessThan 13197.5",
                "id": "0.0070211766",
                "nodeName": "0.0070211766",
                "type": "TreeModel"
              }], "id": "0.014107978", "nodeName": "0.014107978", "type": "TreeModel"
            }, {
              "children": [{
                "children": [{
                  "expression": "cc_usrate_max greaterOrEqual 1.005",
                  "id": "-0.019450175",
                  "nodeName": "-0.019450175",
                  "type": "TreeModel"
                }], "id": "-0.043052327", "nodeName": "-0.043052327", "type": "TreeModel"
              }, {
                "expression": "v2_s_max_user_pay_meishi_succ_amt_360d lessThan 7711.5",
                "id": "-0.0043505942",
                "nodeName": "-0.0043505942",
                "type": "TreeModel"
              }], "id": "-0.015595889", "nodeName": "-0.015595889", "type": "TreeModel"
            }, {
              "children": [{
                "expression": "v2_s_max_user_pay_meishi_succ_amt_360d lessThan 9882.0",
                "id": "9.519879E-4",
                "nodeName": "9.519879E-4",
                "type": "TreeModel"
              }], "id": "-0.0043505942", "nodeName": "-0.0043505942", "type": "TreeModel"
            }, {
              "expression": "cc_mob_max_now lessThan 53.145",
              "id": "0.0070211766",
              "nodeName": "0.0070211766",
              "type": "TreeModel"
            }], "id": "9.519879E-4", "nodeName": "9.519879E-4", "type": "TreeModel"
          }], "type": "MiningModel"
        }, {
          "children": [{
            "expression": "xgbValue * 1.000000",
            "id": "xgbValue",
            "nodeName": "xgbValue",
            "type": "RegressionModel"
          }],
          "expression": "(xgbValue * 1.000000)",
          "id": "regression",
          "nodeName": "regression",
          "type": "RegressionModel"
        }, {
          "children": [{
            "expression": "tmp_score * 1.000000",
            "id": "tmp_score",
            "nodeName": "tmp_score",
            "type": "RegressionModel"
          }],
          "expression": "(tmp_score * 1.000000)",
          "id": "regression",
          "nodeName": "regression",
          "type": "RegressionModel"
        }], "type": "MiningModel"
      },
    }
  },
  'GET /api/model/model-file-param.json': {
    "success": true, "resultCode": "SUCCESS", "resultMsg": "成功", "data": {
      "inputParams": [{
        "id": 0,
        "functorId": 0,
        "generateModelId": 0,
        "functor": null,
        "variableName": "mortgageloan_repay_actual",
        "variableType": "FLOAT",
        "opType": "CONTINUOUS",
        "matchVariableName": null,
        "description": null,
        "extInfo": {},
        "variableParams": null,
        "type": null,
        "variableGraph": null,
        "gmtCreate": null,
        "gmtModified": null
      }, {
        "id": 0,
        "functorId": 0,
        "generateModelId": 0,
        "functor": null,
        "variableName": "app_t2_chuxing_che_youche",
        "variableType": "FLOAT",
        "opType": "CONTINUOUS",
        "matchVariableName": null,
        "description": null,
        "extInfo": {},
        "variableParams": null,
        "type": null,
        "variableGraph": null,
        "gmtCreate": null,
        "gmtModified": null
      }, {
        "id": 0,
        "functorId": 0,
        "generateModelId": 0,
        "functor": null,
        "variableName": "v2_p_user_regweek",
        "variableType": "FLOAT",
        "opType": "CONTINUOUS",
        "matchVariableName": null,
        "description": null,
        "extInfo": {},
        "variableParams": null,
        "type": null,
        "variableGraph": null,
        "gmtCreate": null,
        "gmtModified": null
      }, {
        "id": 0,
        "functorId": 0,
        "generateModelId": 0,
        "functor": null,
        "variableName": "accfd_now_pay",
        "variableType": "FLOAT",
        "opType": "CONTINUOUS",
        "matchVariableName": null,
        "description": null,
        "extInfo": {},
        "variableParams": null,
        "type": null,
        "variableGraph": null,
        "gmtCreate": null,
        "gmtModified": null
      }, {
        "id": 0,
        "functorId": 0,
        "generateModelId": 0,
        "functor": null,
        "variableName": "v_all_query_cnt_2y",
        "variableType": "FLOAT",
        "opType": "CONTINUOUS",
        "matchVariableName": null,
        "description": null,
        "extInfo": {},
        "variableParams": null,
        "type": null,
        "variableGraph": null,
        "gmtCreate": null,
        "gmtModified": null
      }, {
        "id": 0,
        "functorId": 0,
        "generateModelId": 0,
        "functor": null,
        "variableName": "v2_r_user_paycftsuccamt_o_payamt_360d",
        "variableType": "FLOAT",
        "opType": "CONTINUOUS",
        "matchVariableName": null,
        "description": null,
        "extInfo": {},
        "variableParams": null,
        "type": null,
        "variableGraph": null,
        "gmtCreate": null,
        "gmtModified": null
      }, {
        "id": 8,
        "functorId": 0,
        "generateModelId": 0,
        "functor": null,
        "variableName": "idcellnbankalld7applyorgnumt",
        "variableType": "INTEGER",
        "opType": "CONTINUOUS",
        "matchVariableName": "idcellnbankalld7applyorgnumt",
        "description": null,
        "extInfo": {},
        "variableParams": null,
        "type": "TITAN_TEST",
        "variableGraph": null,
        "gmtCreate": 1577428044000,
        "gmtModified": 1577428044000
      }, {
        "id": 11,
        "functorId": 0,
        "generateModelId": 0,
        "functor": null,
        "variableName": "idnbankotherloworglowconcernt",
        "variableType": "INTEGER",
        "opType": "CONTINUOUS",
        "matchVariableName": "idnbankotherloworglowconcernt",
        "description": null,
        "extInfo": {},
        "variableParams": null,
        "type": "TITAN_TEST",
        "variableGraph": null,
        "gmtCreate": 1577428044000,
        "gmtModified": 1577428044000
      }, {
        "id": 0,
        "functorId": 0,
        "generateModelId": 0,
        "functor": null,
        "variableName": "r_credit_succ_after_query_cnt_o_credit_query_cnt_2y",
        "variableType": "FLOAT",
        "opType": "CONTINUOUS",
        "matchVariableName": null,
        "description": null,
        "extInfo": {},
        "variableParams": null,
        "type": null,
        "variableGraph": null,
        "gmtCreate": null,
        "gmtModified": null
      }, {
        "id": 0,
        "functorId": 0,
        "generateModelId": 0,
        "functor": null,
        "variableName": "ln_limit_normal_sum",
        "variableType": "FLOAT",
        "opType": "CONTINUOUS",
        "matchVariableName": null,
        "description": null,
        "extInfo": {},
        "variableParams": null,
        "type": null,
        "variableGraph": null,
        "gmtCreate": null,
        "gmtModified": null
      }, {
        "id": 0,
        "functorId": 0,
        "generateModelId": 0,
        "functor": null,
        "variableName": "app_score_v2_cc_limit_avg_head3_plus_tail3",
        "variableType": "FLOAT",
        "opType": "CONTINUOUS",
        "matchVariableName": null,
        "description": null,
        "extInfo": {},
        "variableParams": null,
        "type": null,
        "variableGraph": null,
        "gmtCreate": null,
        "gmtModified": null
      }, {
        "id": 0,
        "functorId": 0,
        "generateModelId": 0,
        "functor": null,
        "variableName": "acc_max_account_active_range_days",
        "variableType": "FLOAT",
        "opType": "CONTINUOUS",
        "matchVariableName": null,
        "description": null,
        "extInfo": {},
        "variableParams": null,
        "type": null,
        "variableGraph": null,
        "gmtCreate": null,
        "gmtModified": null
      }, {
        "id": 0,
        "functorId": 0,
        "generateModelId": 0,
        "functor": null,
        "variableName": "unsquare_consume_balance",
        "variableType": "FLOAT",
        "opType": "CONTINUOUS",
        "matchVariableName": null,
        "description": null,
        "extInfo": {},
        "variableParams": null,
        "type": null,
        "variableGraph": null,
        "gmtCreate": null,
        "gmtModified": null
      }, {
        "id": 0,
        "functorId": 0,
        "generateModelId": 0,
        "functor": null,
        "variableName": "cc_usrate_avg",
        "variableType": "FLOAT",
        "opType": "CONTINUOUS",
        "matchVariableName": null,
        "description": null,
        "extInfo": {},
        "variableParams": null,
        "type": null,
        "variableGraph": null,
        "gmtCreate": null,
        "gmtModified": null
      }, {
        "id": 13,
        "functorId": 0,
        "generateModelId": 0,
        "functor": null,
        "variableName": "order_all_order_hour_seg_eq_late_night_size_ratio_360d",
        "variableType": "INTEGER",
        "opType": "CONTINUOUS",
        "matchVariableName": "order_all_order_hour_seg_eq_late_night_size_ratio_360d",
        "description": null,
        "extInfo": {},
        "variableParams": null,
        "type": "TITAN_TEST",
        "variableGraph": null,
        "gmtCreate": 1577428044000,
        "gmtModified": 1577428044000
      }, {
        "id": 0,
        "functorId": 0,
        "generateModelId": 0,
        "functor": null,
        "variableName": "add_robust_score_a_b",
        "variableType": "FLOAT",
        "opType": "CONTINUOUS",
        "matchVariableName": null,
        "description": null,
        "extInfo": {},
        "variableParams": null,
        "type": null,
        "variableGraph": null,
        "gmtCreate": null,
        "gmtModified": null
      }, {
        "id": 0,
        "functorId": 0,
        "generateModelId": 0,
        "functor": null,
        "variableName": "ln_repay_actual",
        "variableType": "FLOAT",
        "opType": "CONTINUOUS",
        "matchVariableName": null,
        "description": null,
        "extInfo": {},
        "variableParams": null,
        "type": null,
        "variableGraph": null,
        "gmtCreate": null,
        "gmtModified": null
      }, {
        "id": 0,
        "functorId": 0,
        "generateModelId": 0,
        "functor": null,
        "variableName": "unsquare_consume_times_avg",
        "variableType": "FLOAT",
        "opType": "CONTINUOUS",
        "matchVariableName": null,
        "description": null,
        "extInfo": {},
        "variableParams": null,
        "type": null,
        "variableGraph": null,
        "gmtCreate": null,
        "gmtModified": null
      }, {
        "id": 0,
        "functorId": 0,
        "generateModelId": 0,
        "functor": null,
        "variableName": "app_score_v2_a_bad_abs_top_avg",
        "variableType": "FLOAT",
        "opType": "CONTINUOUS",
        "matchVariableName": null,
        "description": null,
        "extInfo": {},
        "variableParams": null,
        "type": null,
        "variableGraph": null,
        "gmtCreate": null,
        "gmtModified": null
      }, {
        "id": 0,
        "functorId": 0,
        "generateModelId": 0,
        "functor": null,
        "variableName": "order_all_order_hour_seg_eq_late_night_order_hour_unique_cnt_360d",
        "variableType": "FLOAT",
        "opType": "CONTINUOUS",
        "matchVariableName": null,
        "description": null,
        "extInfo": {},
        "variableParams": null,
        "type": null,
        "variableGraph": null,
        "gmtCreate": null,
        "gmtModified": null
      }, {
        "id": 0,
        "functorId": 0,
        "generateModelId": 0,
        "functor": null,
        "variableName": "idcellallallm3applyorgnumt",
        "variableType": "FLOAT",
        "opType": "CONTINUOUS",
        "matchVariableName": null,
        "description": null,
        "extInfo": {},
        "variableParams": null,
        "type": null,
        "variableGraph": null,
        "gmtCreate": null,
        "gmtModified": null
      }, {
        "id": 0,
        "functorId": 0,
        "generateModelId": 0,
        "functor": null,
        "variableName": "idnbankloanm1applyorgnumt",
        "variableType": "FLOAT",
        "opType": "CONTINUOUS",
        "matchVariableName": null,
        "description": null,
        "extInfo": {},
        "variableParams": null,
        "type": null,
        "variableGraph": null,
        "gmtCreate": null,
        "gmtModified": null
      }, {
        "id": 0,
        "functorId": 0,
        "generateModelId": 0,
        "functor": null,
        "variableName": "ln_amt_mbsloan_unsquare_max",
        "variableType": "FLOAT",
        "opType": "CONTINUOUS",
        "matchVariableName": null,
        "description": null,
        "extInfo": {},
        "variableParams": null,
        "type": null,
        "variableGraph": null,
        "gmtCreate": null,
        "gmtModified": null
      }, {
        "id": 0,
        "functorId": 0,
        "generateModelId": 0,
        "functor": null,
        "variableName": "ln_ever_amt_max",
        "variableType": "FLOAT",
        "opType": "CONTINUOUS",
        "matchVariableName": null,
        "description": null,
        "extInfo": {},
        "variableParams": null,
        "type": null,
        "variableGraph": null,
        "gmtCreate": null,
        "gmtModified": null
      }, {
        "id": 0,
        "functorId": 0,
        "generateModelId": 0,
        "functor": null,
        "variableName": "add_robust_score_a",
        "variableType": "FLOAT",
        "opType": "CONTINUOUS",
        "matchVariableName": null,
        "description": null,
        "extInfo": {},
        "variableParams": null,
        "type": null,
        "variableGraph": null,
        "gmtCreate": null,
        "gmtModified": null
      }, {
        "id": 0,
        "functorId": 0,
        "generateModelId": 0,
        "functor": null,
        "variableName": "acc_max_account_reg_days",
        "variableType": "FLOAT",
        "opType": "CONTINUOUS",
        "matchVariableName": null,
        "description": null,
        "extInfo": {},
        "variableParams": null,
        "type": null,
        "variableGraph": null,
        "gmtCreate": null,
        "gmtModified": null
      }, {
        "id": 0,
        "functorId": 0,
        "generateModelId": 0,
        "functor": null,
        "variableName": "wm_add_r_user_wm_add_xiuxianyule_o_total",
        "variableType": "FLOAT",
        "opType": "CONTINUOUS",
        "matchVariableName": null,
        "description": null,
        "extInfo": {},
        "variableParams": null,
        "type": null,
        "variableGraph": null,
        "gmtCreate": null,
        "gmtModified": null
      }, {
        "id": 0,
        "functorId": 0,
        "generateModelId": 0,
        "functor": null,
        "variableName": "v2_r_user_paycftsuccamt_o_payamt_180d",
        "variableType": "FLOAT",
        "opType": "CONTINUOUS",
        "matchVariableName": null,
        "description": null,
        "extInfo": {},
        "variableParams": null,
        "type": null,
        "variableGraph": null,
        "gmtCreate": null,
        "gmtModified": null
      }, {
        "id": 0,
        "functorId": 0,
        "generateModelId": 0,
        "functor": null,
        "variableName": "idcellnbankallm3applyorgnumt",
        "variableType": "FLOAT",
        "opType": "CONTINUOUS",
        "matchVariableName": null,
        "description": null,
        "extInfo": {},
        "variableParams": null,
        "type": null,
        "variableGraph": null,
        "gmtCreate": null,
        "gmtModified": null
      }, {
        "id": 14,
        "functorId": 0,
        "generateModelId": 0,
        "functor": null,
        "variableName": "idcellnbankloanm3applyorgnumt",
        "variableType": "INTEGER",
        "opType": "CONTINUOUS",
        "matchVariableName": "idcellnbankloanm3applyorgnumt",
        "description": null,
        "extInfo": {},
        "variableParams": null,
        "type": "TITAN_TEST",
        "variableGraph": null,
        "gmtCreate": 1577428044000,
        "gmtModified": 1577428044000
      }, {
        "id": 0,
        "functorId": 0,
        "generateModelId": 0,
        "functor": null,
        "variableName": "v_credit_query_cnt_2y",
        "variableType": "FLOAT",
        "opType": "CONTINUOUS",
        "matchVariableName": null,
        "description": null,
        "extInfo": {},
        "variableParams": null,
        "type": null,
        "variableGraph": null,
        "gmtCreate": null,
        "gmtModified": null
      }, {
        "id": 0,
        "functorId": 0,
        "generateModelId": 0,
        "functor": null,
        "variableName": "v2_v_user_acc_visit_week_cnt_360d",
        "variableType": "FLOAT",
        "opType": "CONTINUOUS",
        "matchVariableName": null,
        "description": null,
        "extInfo": {},
        "variableParams": null,
        "type": null,
        "variableGraph": null,
        "gmtCreate": null,
        "gmtModified": null
      }, {
        "id": 0,
        "functorId": 0,
        "generateModelId": 0,
        "functor": null,
        "variableName": "unsquare_consume_balance_max",
        "variableType": "FLOAT",
        "opType": "CONTINUOUS",
        "matchVariableName": null,
        "description": null,
        "extInfo": {},
        "variableParams": null,
        "type": null,
        "variableGraph": null,
        "gmtCreate": null,
        "gmtModified": null
      }, {
        "id": 0,
        "functorId": 0,
        "generateModelId": 0,
        "functor": null,
        "variableName": "qry_times_self_l1st",
        "variableType": "FLOAT",
        "opType": "CONTINUOUS",
        "matchVariableName": null,
        "description": null,
        "extInfo": {},
        "variableParams": null,
        "type": null,
        "variableGraph": null,
        "gmtCreate": null,
        "gmtModified": null
      }, {
        "id": 0,
        "functorId": 0,
        "generateModelId": 0,
        "functor": null,
        "variableName": "cc_mob_max_now",
        "variableType": "FLOAT",
        "opType": "CONTINUOUS",
        "matchVariableName": null,
        "description": null,
        "extInfo": {},
        "variableParams": null,
        "type": null,
        "variableGraph": null,
        "gmtCreate": null,
        "gmtModified": null
      }, {
        "id": 0,
        "functorId": 0,
        "generateModelId": 0,
        "functor": null,
        "variableName": "acc_avg_account_reg_days",
        "variableType": "FLOAT",
        "opType": "CONTINUOUS",
        "matchVariableName": null,
        "description": null,
        "extInfo": {},
        "variableParams": null,
        "type": null,
        "variableGraph": null,
        "gmtCreate": null,
        "gmtModified": null
      }, {
        "id": 0,
        "functorId": 0,
        "generateModelId": 0,
        "functor": null,
        "variableName": "overduehighestmonthlyofloan",
        "variableType": "FLOAT",
        "opType": "CONTINUOUS",
        "matchVariableName": null,
        "description": null,
        "extInfo": {},
        "variableParams": null,
        "type": null,
        "variableGraph": null,
        "gmtCreate": null,
        "gmtModified": null
      }, {
        "id": 12,
        "functorId": 0,
        "generateModelId": 0,
        "functor": null,
        "variableName": "idcellnbankp2pm3applyorgnumt",
        "variableType": "INTEGER",
        "opType": "CONTINUOUS",
        "matchVariableName": "idcellnbankp2pm3applyorgnumt",
        "description": null,
        "extInfo": {},
        "variableParams": null,
        "type": "TITAN_TEST",
        "variableGraph": null,
        "gmtCreate": 1577428044000,
        "gmtModified": 1577428044000
      }, {
        "id": 0,
        "functorId": 0,
        "generateModelId": 0,
        "functor": null,
        "variableName": "sp_s_sum_user_sp_alipay_pay_succ_amt_6m",
        "variableType": "FLOAT",
        "opType": "CONTINUOUS",
        "matchVariableName": null,
        "description": null,
        "extInfo": {},
        "variableParams": null,
        "type": null,
        "variableGraph": null,
        "gmtCreate": null,
        "gmtModified": null
      }, {
        "id": 0,
        "functorId": 0,
        "generateModelId": 0,
        "functor": null,
        "variableName": "cc_usrate_100p_cnt",
        "variableType": "FLOAT",
        "opType": "CONTINUOUS",
        "matchVariableName": null,
        "description": null,
        "extInfo": {},
        "variableParams": null,
        "type": null,
        "variableGraph": null,
        "gmtCreate": null,
        "gmtModified": null
      }, {
        "id": 0,
        "functorId": 0,
        "generateModelId": 0,
        "functor": null,
        "variableName": "idnbankallm3applyorgnumt",
        "variableType": "FLOAT",
        "opType": "CONTINUOUS",
        "matchVariableName": null,
        "description": null,
        "extInfo": {},
        "variableParams": null,
        "type": null,
        "variableGraph": null,
        "gmtCreate": null,
        "gmtModified": null
      }, {
        "id": 0,
        "functorId": 0,
        "generateModelId": 0,
        "functor": null,
        "variableName": "v2_p_user_regday",
        "variableType": "FLOAT",
        "opType": "CONTINUOUS",
        "matchVariableName": null,
        "description": null,
        "extInfo": {},
        "variableParams": null,
        "type": null,
        "variableGraph": null,
        "gmtCreate": null,
        "gmtModified": null
      }, {
        "id": 0,
        "functorId": 0,
        "generateModelId": 0,
        "functor": null,
        "variableName": "ln_amt_l6th_creditloan",
        "variableType": "FLOAT",
        "opType": "CONTINUOUS",
        "matchVariableName": null,
        "description": null,
        "extInfo": {},
        "variableParams": null,
        "type": null,
        "variableGraph": null,
        "gmtCreate": null,
        "gmtModified": null
      }, {
        "id": 0,
        "functorId": 0,
        "generateModelId": 0,
        "functor": null,
        "variableName": "creditloan_times_avg",
        "variableType": "FLOAT",
        "opType": "CONTINUOUS",
        "matchVariableName": null,
        "description": null,
        "extInfo": {},
        "variableParams": null,
        "type": null,
        "variableGraph": null,
        "gmtCreate": null,
        "gmtModified": null
      }, {
        "id": 0,
        "functorId": 0,
        "generateModelId": 0,
        "functor": null,
        "variableName": "cc_usrate_max",
        "variableType": "FLOAT",
        "opType": "CONTINUOUS",
        "matchVariableName": null,
        "description": null,
        "extInfo": {},
        "variableParams": null,
        "type": null,
        "variableGraph": null,
        "gmtCreate": null,
        "gmtModified": null
      }, {
        "id": 0,
        "functorId": 0,
        "generateModelId": 0,
        "functor": null,
        "variableName": "consumerloan_times_avg",
        "variableType": "FLOAT",
        "opType": "CONTINUOUS",
        "matchVariableName": null,
        "description": null,
        "extInfo": {},
        "variableParams": null,
        "type": null,
        "variableGraph": null,
        "gmtCreate": null,
        "gmtModified": null
      }, {
        "id": 0,
        "functorId": 0,
        "generateModelId": 0,
        "functor": null,
        "variableName": "idcellnbankp2pd7applyorgnumt",
        "variableType": "FLOAT",
        "opType": "CONTINUOUS",
        "matchVariableName": null,
        "description": null,
        "extInfo": {},
        "variableParams": null,
        "type": null,
        "variableGraph": null,
        "gmtCreate": null,
        "gmtModified": null
      }, {
        "id": 0,
        "functorId": 0,
        "generateModelId": 0,
        "functor": null,
        "variableName": "ln_delq_l12m_lvl1p_times_v2",
        "variableType": "FLOAT",
        "opType": "CONTINUOUS",
        "matchVariableName": null,
        "description": null,
        "extInfo": {},
        "variableParams": null,
        "type": null,
        "variableGraph": null,
        "gmtCreate": null,
        "gmtModified": null
      }, {
        "id": 0,
        "functorId": 0,
        "generateModelId": 0,
        "functor": null,
        "variableName": "idcellnbankconsumem3applyorgnumt",
        "variableType": "FLOAT",
        "opType": "CONTINUOUS",
        "matchVariableName": null,
        "description": null,
        "extInfo": {},
        "variableParams": null,
        "type": null,
        "variableGraph": null,
        "gmtCreate": null,
        "gmtModified": null
      }, {
        "id": 0,
        "functorId": 0,
        "generateModelId": 0,
        "functor": null,
        "variableName": "add_robust_score_a_b_c",
        "variableType": "FLOAT",
        "opType": "CONTINUOUS",
        "matchVariableName": null,
        "description": null,
        "extInfo": {},
        "variableParams": null,
        "type": null,
        "variableGraph": null,
        "gmtCreate": null,
        "gmtModified": null
      }, {
        "id": 0,
        "functorId": 0,
        "generateModelId": 0,
        "functor": null,
        "variableName": "add_robust_score_ab",
        "variableType": "FLOAT",
        "opType": "CONTINUOUS",
        "matchVariableName": null,
        "description": null,
        "extInfo": {},
        "variableParams": null,
        "type": null,
        "variableGraph": null,
        "gmtCreate": null,
        "gmtModified": null
      }, {
        "id": 0,
        "functorId": 0,
        "generateModelId": 0,
        "functor": null,
        "variableName": "v2_r_user_paywmabnormtimecnt_o_paywmcnt_360d",
        "variableType": "FLOAT",
        "opType": "CONTINUOUS",
        "matchVariableName": null,
        "description": null,
        "extInfo": {},
        "variableParams": null,
        "type": null,
        "variableGraph": null,
        "gmtCreate": null,
        "gmtModified": null
      }, {
        "id": 0,
        "functorId": 0,
        "generateModelId": 0,
        "functor": null,
        "variableName": "order_all_order_hour_seg_eq_late_night_order_dt_unique_cnt_ratio_360d",
        "variableType": "FLOAT",
        "opType": "CONTINUOUS",
        "matchVariableName": null,
        "description": null,
        "extInfo": {},
        "variableParams": null,
        "type": null,
        "variableGraph": null,
        "gmtCreate": null,
        "gmtModified": null
      }, {
        "id": 3,
        "functorId": 0,
        "generateModelId": 0,
        "functor": null,
        "variableName": "v2_s_max_user_pay_meishi_succ_amt_360d",
        "variableType": "INTEGER",
        "opType": "CONTINUOUS",
        "matchVariableName": "v2_s_max_user_pay_meishi_succ_amt_360d",
        "description": null,
        "extInfo": {},
        "variableParams": null,
        "type": "TITAN_TEST",
        "variableGraph": null,
        "gmtCreate": 1577428044000,
        "gmtModified": 1577428044000
      }, {
        "id": 0,
        "functorId": 0,
        "generateModelId": 0,
        "functor": null,
        "variableName": "ln_mob_internet_min_v3",
        "variableType": "FLOAT",
        "opType": "CONTINUOUS",
        "matchVariableName": null,
        "description": null,
        "extInfo": {},
        "variableParams": null,
        "type": null,
        "variableGraph": null,
        "gmtCreate": null,
        "gmtModified": null
      }],
      "outputParams": [{
        "id": 0,
        "functorId": 0,
        "generateModelId": 0,
        "functor": null,
        "variableName": "app_fin_model_a_score_gaia_v2_3",
        "variableType": "INTEGER",
        "opType": "CONTINUOUS",
        "matchVariableName": null,
        "description": null,
        "extInfo": {},
        "variableParams": null,
        "type": null,
        "variableGraph": null,
        "gmtCreate": null,
        "gmtModified": null
      }]
    }
  }

}
